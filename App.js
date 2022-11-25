'use strict';

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " APPPPPPPPP POST "
    ),
    React.createElement(ReactPost, { username: "Dolly_p", postImage: "assets/images/doll.jpeg" }),
    ";",
    React.createElement(ReactPost, { username: "DOnkey69", postImage: "assets/images/mushroom.jpeg" }),
    ";",
    React.createElement(ReactPost, {
      username: "Shreksymann",
      postImage: "assets/images/godzilla.jpeg"
    }),
    ";",
    React.createElement(ReactPost, { username: "Tennischamp", postImage: "assets/images/momo.jpeg" }),
    ";",
    React.createElement(ReactPost, { username: "generalmineral", postImage: "assets/insta-clone.png" }),
    ";"
  );
}

var appRootNode = document.getElementById('app');
var appRoot = ReactDOM.createRoot(appRootNode);
appRoot.render(React.createElement(App));