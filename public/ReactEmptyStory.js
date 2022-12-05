'use strict';

function ReactEmptyStory() {
  // function getMushroomData() {}

  return React.createElement(
    "button",
    { className: "story" },
    React.createElement(
      "div",
      { className: "story__avatar" },
      React.createElement(
        "div",
        { className: "story__border" },
        React.createElement(
          "svg",
          { width: 64, height: 64, xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("circle", { r: 31, cy: 32, cx: 32 })
        )
      ),
      React.createElement(
        "div",
        { className: "story__picture" },
        React.createElement("img", { src: "assets/default-user.png", alt: "User Picture" })
      )
    ),
    React.createElement(
      "span",
      { className: "story__user" },
      "usernick4"
    )
  );
}