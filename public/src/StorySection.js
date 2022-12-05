// import { useState } from '.././../useStateModule.js';
('use strict');

function StorySection() {
  const [image, setImage] = React.useState('');

  let deletePost = document.getElementById('delete-post');
  deletePost.addEventListener('click', changeImage);

  function changeImage() {
    setImage(localStorage.getItem('data'));
  }
  return (
    <div className="stories__content">
      <ReactStory username="my-shroomy" storyImage={image} />
      <ReactStory
        username="jules_xmas"
        storyImage="assets/status/wet-air_lukewarm.jpg"
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
