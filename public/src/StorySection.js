'use strict';

function StorySection() {
  let image = '';

  // setInterval(() => console.log('you see me every 2 seconds'), 2000);
  // setInterval(() => (image = localStorage.getItem('data')));
  // setInterval(() => console.log('CURRENT IMAGE: '), image);

  return (
    <div className="stories__content">
      <ReactStory
        username="my-shroomy"
        storyImage="/public/assets/status/wet-air_cold.jpg"
      />
      <ReactStory
        username="jules_xmas"
        storyImage={localStorage.getItem('data')}
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
