'use strict';

function PostSection() {
  return React.createElement(
    "div",
    null,
    React.createElement(ReactPost, { username: "Dolly_p", postImage: "assets/images/doll.jpeg" }),
    ";",
    React.createElement(ReactPost, { username: "Dolly_p", postImage: "assets/images/mushroom.jpeg" }),
    ";",
    React.createElement(ReactPost, { username: "Dolly_p", postImage: "assets/images/godzilla.jpeg" }),
    ";",
    React.createElement(ReactPost, { username: "Dolly_p", postImage: "assets/images/momo.jpeg" }),
    ";",
    React.createElement(ReactPost, { username: "Dolly_p", postImage: "assets/insta-clone.png" }),
    ";"
  );
}

var postRootNode = document.getElementById('post-root');
var postRoot = ReactDOM.createRoot(postRootNode);
postRoot.render(React.createElement(PostSection));