/// YOUR PORT GOES HERE:
const arduinoPort = '/dev/cu.usbmodem21301';

// let portsResult = [];

// async function getSerial() {
//   try {
//     await SerialPort.list().then((ports) =>
//       ports.forEach((port) => portsResult.push(port.path))
//     );
//     console.log(portsResult[0]);
//   } catch (error) {
//     console.log(error);
//   }
// }

//// SERVER SETUP ////

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public');
});
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Node is listening to port');
  socket.on('disconnect', () => {
    console.log('DISCONNECTED!');
  });
});
const serverport = process.env.PORT || 3000;

server.listen(serverport, () => {
  console.log(`listening on ${serverport}`);
});

//// SERIAL PORT READER ////
// set up serialport and line parser for incoming signal.
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

/* function activateTest() {
  const humKeyWords = {
    low: 'dry-air',
    medium: 'humid-air',
    high: 'wet-air',
  };

  const temKeyWords = {
    low: 'freezing',
    medium: 'lukewarm',
    high: 'hot',
  };

  let temIndexGlobal = 0;
  let hardpath = '/assets/status/';
  setInterval(emitData, 500);

  // const temKeys = Object.keys(temKeyWords);
  const temValues = Object.values(temKeyWords);

  // You can clear a periodic function by uncommenting:
  // clearInterval(intervalId);

  let lastClick = 0;
  const delay = 3000;
  function emitData() {
    if (lastClick >= Date.now() - delay) return;
    lastClick = Date.now();
    let newImage =
      hardpath + humKeyWords.low + '_' + temValues[temIndexGlobal] + '.jpg';
    io.emit('data', newImage);
    console.log(newImage);
    if (temIndexGlobal >= 2) {
      temIndexGlobal = 0;
    } else {
      temIndexGlobal += 1;
    }
  }
} */
function activateSerialPort() {
  const port = new SerialPort({ path: arduinoPort, baudRate: 9600 });
  const parser = port.pipe(new ReadlineParser({ delimiter: '\n' })); // Read the port data

  // variables containing the data for the humidity and temperature
  let hum = '';
  let tem = '';

  const humKeyWords = {
    low: 'dry',
    medium: 'humid',
    high: 'wet',
  };

  const temKeyWords = {
    low: 'freezing',
    medium: 'warm',
    high: 'hot',
  };

  port.on('open', () => {
    console.log('serial port open');
  });
  parser.on('data', (data) => {
    // reading each line and splitting
    // do this if the line is NOT 'T' or 'H'
    if (data[0] !== 'T') {
      console.log(data);

      // Do this with any temperature and humidity data
    } else {
      const dataArray = data.split(' ');
      const temString = dataArray[0];
      const humString = dataArray[1];
      // depending on whether it starts with 'T' or 'H' will affect variables, `hum` or `tem`

      let temdata = Number(temString.slice(1));
      // console.log('temperature is: ' + temdata);

      if (temdata < 10) {
        tem = temKeyWords.low;
      } else if (temdata > 22) {
        tem = temKeyWords.high;
      } else {
        tem = temKeyWords.medium;
      }

      let humdata = Number(humString.slice(1));
      // console.log('humidity is: ' + humdata);

      if (humdata < 50) {
        hum = humKeyWords.low;
      } else if (humdata > 75) {
        hum = humKeyWords.high;
      } else {
        hum = humKeyWords.medium;
      }

      let keywordString = `${hum}_${tem}`;
      let path = 'assets/status/' + keywordString + '.png';

      console.log(
        `Mushroom status - ${tem} (${temdata}° C) & ${hum} (${humdata} %)`
      );

      // emit image and delete events
      let lastClick = 0;
      const delay = 4000;
      function emitImage() {
        if (lastClick >= Date.now() - delay) return;
        lastClick = Date.now();
        io.emit('data', path);
        // console.log(path);
      }
      function emitDelete() {
        // console.log('1 delete event');
        io.emit('delete', 'delete');
      }
      emitImage();
      emitDelete();
    }
  });
}

activateSerialPort();
// activateTest();
