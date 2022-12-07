var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

'use strict';
var socket = io();
socket.on('connection', function () {
  return console.log('Connected to STORY');
});

function StorySection() {
  // push to localstorage and call changeImage everytime it gets some data:
  React.useEffect(function () {
    socket.on('data', function (data) {
      localStorage.setItem('data', data);
      console.log(data);
      setImage(localStorage.getItem('data'));
    });
  }, []);

  // change image displayed using state

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      image = _React$useState2[0],
      setImage = _React$useState2[1];

  return React.createElement(
    'div',
    { className: 'stories__content' },
    React.createElement(ReactStory, { username: 'my-shroomy', storyImage: image }),
    React.createElement(ReactStory, {
      username: 'jules_xmas',
      storyImage: 'assets/status/wet-air_lukewarm.jpg'
    }),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null),
    React.createElement(ReactEmptyStory, null)
  );
}

var storyRootNode = document.getElementById('story-root');
var storyRoot = ReactDOM.createRoot(storyRootNode);
storyRoot.render(React.createElement(StorySection));