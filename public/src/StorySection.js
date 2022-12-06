('use strict');

function StorySection() {
  // const [socket, setSocket] = React.useState();
  // React.useEffect(() => {
  //   console.log('connected');
  // }, []);

  // setTimeout(changeImage, 1000);

  const storysocket = io();

  // change image displayed using state
  const [image, setImage] = React.useState('');

  function changeImage() {
    setImage(localStorage.getItem('data'));
  }

  // push to localstorage and call changeImage everytime it gets some data:
  storysocket.on('data', (data) => {
    localStorage.setItem('data', data);
    console.log(data);
    changeImage();
  });

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
