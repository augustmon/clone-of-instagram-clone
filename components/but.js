'use strict';

function But() {
  return React.createElement(
    'p',
    null,
    'BUTT!!!!!!!!'
  );
}

var rootNode = document.getElementById('but-root');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(But, null));