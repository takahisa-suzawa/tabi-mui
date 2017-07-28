import React, { PropTypes, Component } from 'react';

class ImgSlider extends Component {
  render() {
    return (
      <div id="css-slider">
        <div class="slider-wrapper">
          <div class="slide-item"><img src="/src/image/logo.png"/></div>
          <div class="slide-item"><img src="/src/image/logo.png"/></div>
          <div class="slide-item"><img src="/src/image/logo.png"/></div>
        </div>
      </div>
    );
  }
}

export default ImgSlider;
