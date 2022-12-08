('use strict');
const storySocket = io();
storySocket.on('connection', () => console.log('Connected to STORY'));

function StorySection() {
  // push to localstorage and call changeImage everytime it gets some data:
  React.useEffect(() => {
    storySocket.on('data', (data) => {
      localStorage.setItem('data', data);
      console.log(data);
      setImage(localStorage.getItem('data'));
    });
  }, []);

  // change image displayed using state
  const [image, setImage] = React.useState('');

  return (
    <div className="stories__content">
      <ReactStory username="my-celium" storyImage={image} />
      <ReactStory
        username="toys4xmas"
        storyImage="assets/images/godzilla.jpeg"
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
