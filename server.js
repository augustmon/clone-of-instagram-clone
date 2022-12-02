//// SERVER SETUP ////
let portsResult = [];

async function getSerial() {
  try {
    await SerialPort.list().then((ports) =>
      ports.forEach((port) => portsResult.push(port.path))
    );
    console.log(portsResult[0]);
  } catch (error) {
    console.log(error);
  }
}

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
  // socket.on('data', (what) => console.log(what));
  socket.on('disconnect', () => {
    console.log('DISCONNECTED!');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

//// SERIAL PORT READER ////
// set up serialport and line parser for incoming signal.
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

let hardpath = 'public/assets/status/dry-air_freezing.jpg';
io.emit('data', hardpath);
console.log(hardpath);

// const serialPorts = getSerial();
// console.log(serialPorts);
// const arduinoPort = serialPorts[0];
// console.log(arduinoPort);

const arduinoPort = '/dev/cu.usbmodem11301';

const port = new SerialPort({ path: arduinoPort, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' })); // Read the port data

// variables containing the data for the humidity and temperature
let hum = '';
let tem = '';

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

port.on('open', () => {
  console.log('serial port open');
});
parser.on('data', (data) => {
  // reading each line
  // depending on whether it starts with 'T' or 'H' will affect variables, `hum` or `tem`

  // do this with temperature data (when line starts with 'T')
  if (data[0] == 'T') {
    let temdata = Number(data.slice(1));
    // console.log("temperature is: " + temdata);

    if (temdata < 10) {
      tem = temKeyWords.low;
    } else if (temdata > 22) {
      tem = temKeyWords.high;
    } else {
      tem = temKeyWords.medium;
    }

    // do this with humidity data (when line starts with 'H')
  } else if (data[0] == 'H') {
    let humdata = Number(data.slice(1));
    // console.log("humidity is: " + humdata);

    if (humdata < 50) {
      hum = humKeyWords.low;
    } else if (humdata > 75) {
      hum = humKeyWords.high;
    } else {
      hum = humKeyWords.medium;
    }

    // do this if the line is NOT 'T' or 'H'
  } else {
    console.log(data);
  }

  let keywordString = `${hum}_${tem}`;
  let path = '/images/status/' + keywordString + '.jpg';

  io.emit('data', path);
  console.log(path);
});
