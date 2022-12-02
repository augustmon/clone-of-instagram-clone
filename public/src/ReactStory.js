'use strict';

function ReactStory(props) {
  function makeFullScreen() {
    const fullPage = document.querySelector('#fullpage');
    if (fullPage.style.display !== 'block') {
      fullPage.style.backgroundImage = 'url(' + props.storyImage + ')';
      fullPage.style.display = 'block';
    } else {
      fullPage.style.display = 'none';
    }
  }

  return (
    <button onClick={makeFullScreen} className="story story--has-story">
      <div className="story__avatar">
        <div className="story__border">
          <svg width={64} height={64} xmlns="http://www.w3.org/2000/svg">
            <circle r={31} cy={32} cx={32} />
            <defs>
              <linearGradient y2={0} x2={1} y1={1} x1={0} id="--story-gradient">
                <stop offset={0} stopColor="#f09433" />
                <stop offset="0.25" stopColor="#e6683c" />
                <stop offset="0.5" stopColor="#dc2743" />
                <stop offset="0.75" stopColor="#cc2366" />
                <stop offset={1} stopColor="#bc1888" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="story__picture">
          <img src={props.storyImage} alt="User Picture" />
        </div>
      </div>
      <span className="story__user">{props.username}</span>
    </button>
  );
}
