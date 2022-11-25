'use strict';

function StorySection() {
  return (
    <div className="stories__content">
      <ReactStory
        username="my-shroomy"
        storyImage="/assets/status/wet-air_cold.jpg"
        // THIS COULD BE SET BY SERIAL PORT SCRIPT
      />
      <ReactStory
        username="jules_xmas"
        storyImage="/assets/status/dry-air_hot.jpg"
      />
      <ReactEmptyStory />
      <ReactEmptyStory />
      <ReactEmptyStory />
      <ReactEmptyStory />
      <ReactEmptyStory />
      <ReactEmptyStory />
      <ReactEmptyStory />
      <ReactEmptyStory />
      <ReactEmptyStory />
    </div>
  );
}

const storyRootNode = document.getElementById('story-root');
const storyRoot = ReactDOM.createRoot(storyRootNode);
storyRoot.render(React.createElement(StorySection));
