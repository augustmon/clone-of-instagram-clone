'use strict';

function PostSection() {
  return (
    <div>
      <h1> POSTS </h1>
      <ReactPost username="Dolly_p" postImage="assets/images/doll.jpeg" />;
      <ReactPost username="Dolly_p" postImage="assets/images/mushroom.jpeg" />;
      <ReactPost username="Dolly_p" postImage="assets/images/godzilla.jpeg" />;
      <ReactPost username="Dolly_p" postImage="assets/images/momo.jpeg" />;
      <ReactPost username="Dolly_p" postImage="assets/insta-clone.png" />;
    </div>
  );
}

const postRootNode = document.getElementById('post-root');
const postRoot = ReactDOM.createRoot(postRootNode);
postRoot.render(React.createElement(PostSection));
