'use strict';
const postSocket = io();
postSocket.on('connection', () => console.log('connected to POST'));

function PostSection() {
  React.useEffect(() => {
    console.log('first use effect');
    postSocket.on('delete', () => {
      deletePost();
      setPostState(postArray);
      // console.log('useEffect postArray', postArray);
      alert('Mushroom ate your old post, and created a new story!');
    });
  }, []);

  let postArray = [
    'assets/images/cat1.jpg',
    'assets/images/cat2.jpg',
    'assets/images/cat3.jpg',
    'assets/images/cat4.jpg',
    'assets/images/cat5.jpg',
  ];

  // const deleteBtn = document.getElementById('delete-post');
  // // const listener = document.getElementById.()
  // deleteBtn.addEventListener('click', deletePost);
  // console.log(postArray);

  function deletePost() {
    if (postArray.length <= 0) {
      postArray = [
        'assets/images/cat1.jpg',
        'assets/images/cat2.jpg',
        'assets/images/cat3.jpg',
        'assets/images/cat4.jpg',
        'assets/images/cat5.jpg',
      ];
    } else {
      const copyOfArray = [...postArray];
      copyOfArray.pop();
      // console.log('copy', copyOfArray);
      postArray = copyOfArray;
      // console.log('new', postArray);
    }
  }

  const [postState, setPostState] = React.useState(postArray);

  // turning postArray into React-elements to render out on page
  let postRenders = postState.map(function (post, i) {
    return (post = (
      <ReactPost key={i} username="doll-e" postImage={postArray[i]} />
    ));
  });

  return <div>{postRenders}</div>;
}

const postRootNode = document.getElementById('post-root');
const postRoot = ReactDOM.createRoot(postRootNode);
postRoot.render(React.createElement(PostSection));
