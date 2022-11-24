'use strict';

function But() {
  return <p>BUTT!!!!!!!!</p>;
}

const rootNode = document.getElementById('but-root');
const root = ReactDOM.createRoot(rootNode);
root.render(<But />);
