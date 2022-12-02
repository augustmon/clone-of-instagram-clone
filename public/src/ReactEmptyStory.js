'use strict';

function ReactEmptyStory() {
  // function getMushroomData() {}

  return (
    <button className="story" onClick="">
      <div className="story__avatar">
        <div className="story__border">
          <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg">
            <circle r={31} cy={32} cx={32} />
          </svg>
        </div>
        <div className="story__picture">
          <img src="assets/default-user.png" alt="User Picture" />
        </div>
      </div>
      <span className="story__user">usernick4</span>
    </button>
  );
}
