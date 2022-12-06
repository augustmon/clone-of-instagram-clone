'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function PostSection() {
  var postsocket = io();
  postsocket.on('data', function (data) {
    if (data !== null) {
      deletePost();
      alert('Mushroom ate your old post, and created a new story!');
    }
  });

  var _React$useState = React.useState(['assets/images/doll.jpeg', 'assets/images/mushroom.jpeg', 'assets/images/godzilla.jpeg', 'assets/images/momo.jpeg']),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      postArray = _React$useState2[0],
      setPostArray = _React$useState2[1];

  // const deleteBtn = document.getElementById('delete-post');
  // // const listener = document.getElementById.()
  // deleteBtn.addEventListener('click', deletePost);

  function deletePost() {
    if (postArray.length == 0) {
      setPostArray(['assets/images/doll.jpeg', 'assets/images/mushroom.jpeg', 'assets/images/godzilla.jpeg', 'assets/images/momo.jpeg']);
    } else {
      var copyOfArray = [].concat(_toConsumableArray(postArray));
      copyOfArray.pop();
      setPostArray(copyOfArray);
    }
  }

  // turning postArray into React-elements to render out on page
  var postRenders = postArray.map(function (post, i) {
    return post = React.createElement(ReactPost, { key: i, username: 'Me99', postImage: postArray[i] });
  });

  return React.createElement(
    'div',
    null,
    postRenders
  );
}

var postRootNode = document.getElementById('post-root');
var postRoot = ReactDOM.createRoot(postRootNode);
postRoot.render(React.createElement(PostSection));