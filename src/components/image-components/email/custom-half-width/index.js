import React, { Component } from 'react';
import './style.scss';
import customhalf from './custom_half_width.png';



class CustomHalf extends Component {
  render() {

    return (
        <div className="custom-half-wrapper">
            <img src={customhalf} className="customhalf"/>
        </div>
    );
}
}

export default CustomHalf;
