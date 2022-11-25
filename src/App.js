'use strict';

function App() {
  return (
    <div>
      <h1> APPPPPPPPP POST </h1>
      <ReactPost username="Dolly_p" postImage="assets/images/doll.jpeg" />;
      <ReactPost username="DOnkey69" postImage="assets/images/mushroom.jpeg" />;
      <ReactPost
        username="Shreksymann"
        postImage="assets/images/godzilla.jpeg"
      />
      ;
      <ReactPost username="Tennischamp" postImage="assets/images/momo.jpeg" />;
      <ReactPost username="generalmineral" postImage="assets/insta-clone.png" />
      ;
    </div>
  );
}

const appRootNode = document.getElementById('app');
const appRoot = ReactDOM.createRoot(appRootNode);
appRoot.render(React.createElement(App));
