'use strict';

function ReactStory(props) {
  function makeFullScreen() {
    var fullPage = document.querySelector('#fullpage');
    if (fullPage.style.display !== 'block') {
      fullPage.style.backgroundImage = 'url(' + props.storyImage + ')';
      fullPage.style.display = 'block';
    } else {
      fullPage.style.display = 'none';
    }
  }

  return React.createElement(
    'button',
    { onClick: makeFullScreen, className: 'story story--has-story' },
    React.createElement(
      'div',
      { className: 'story__avatar' },
      React.createElement(
        'div',
        { className: 'story__border' },
        React.createElement(
          'svg',
          { width: 64, height: 64, xmlns: 'http://www.w3.org/2000/svg' },
          React.createElement('circle', { r: 31, cy: 32, cx: 32 }),
          React.createElement(
            'defs',
            null,
            React.createElement(
              'linearGradient',
              { y2: 0, x2: 1, y1: 1, x1: 0, id: '--story-gradient' },
              React.createElement('stop', { offset: 0, stopColor: '#f09433' }),
              React.createElement('stop', { offset: '0.25', stopColor: '#e6683c' }),
              React.createElement('stop', { offset: '0.5', stopColor: '#dc2743' }),
              React.createElement('stop', { offset: '0.75', stopColor: '#cc2366' }),
              React.createElement('stop', { offset: 1, stopColor: '#bc1888' })
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'story__picture' },
        React.createElement('img', { src: props.storyImage, alt: props.storyImage })
      )
    ),
    React.createElement(
      'span',
      { className: 'story__user' },
      props.username
    )
  );
}