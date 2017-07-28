import React, { Component, PropTypes } from 'react';
import ImgSlider from './ImgSlider';
import PlanList from './PlanList';

const defaultStyle = {
  marginLeft: 20
};

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <section className="main" style={defaultStyle}>
        <PlanList/>
      </section>
    );
  }
}

Main.propTypes = {
};

export default Main;
