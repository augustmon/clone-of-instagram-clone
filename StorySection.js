'use strict';

function StorySection() {
  return React.createElement(
    "div",
    { className: "stories__content" },
    React.createElement(ReactStory, {
      username: "my-shroomy",
      storyImage: "/assets/status/wet-air_cold.jpg"
      // THIS COULD BE SET BY SERIAL PORT SCRIPT
    }),
    React.createElement(ReactStory, {
      username: "jules_xmas",
      storyImage: "/assets/status/dry-air_hot.jpg"
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