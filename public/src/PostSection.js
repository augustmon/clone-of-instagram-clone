'use strict';

function PostSection() {
  const [postArray, setPostArray] = React.useState([
    'assets/images/doll.jpeg',
    'assets/images/mushroom.jpeg',
    'assets/images/godzilla.jpeg',
    'assets/images/momo.jpeg',
  ]);

  const deleteBtn = document.getElementById('delete-post');
  deleteBtn.addEventListener('click', deletePost);

  function deletePost() {
    if (postArray.length == 0) {
      setPostArray([
        'assets/images/doll.jpeg',
        'assets/images/mushroom.jpeg',
        'assets/images/godzilla.jpeg',
        'assets/images/momo.jpeg',
      ]);
    } else {
      const copyOfArray = [...postArray];
      copyOfArray.pop();
      setPostArray(copyOfArray);
    }
  }

  // turning postArray into React-elements to render out on page
  let postRenders = postArray.map(function (post, i) {
    return (post = (
      <ReactPost key={i} username="Me99" postImage={postArray[i]} />
    ));
  });

  return (
    <div>
      <h1> POSTS </h1>

      {postRenders}
    </div>
  );
}

const postRootNode = document.getElementById('post-root');
const postRoot = ReactDOM.createRoot(postRootNode);
postRoot.render(React.createElement(PostSection));
