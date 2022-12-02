'use strict';

function StorySection() {
  var image = '';

  // setInterval(() => console.log('you see me every 2 seconds'), 2000);
  // setInterval(() => (image = localStorage.getItem('data')));
  // setInterval(() => console.log('CURRENT IMAGE: '), image);

  return React.createElement(
    'div',
    { className: 'stories__content' },
    React.createElement(ReactStory, {
      username: 'my-shroomy',
      storyImage: '/assets/status/wet-air_cold.jpg'
    }),
    React.createElement(ReactStory, {
      username: 'jules_xmas',
      storyImage: localStorage.getItem('data')
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