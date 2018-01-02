import React, { Component } from 'react';
import './style.scss';
import customfull from './custom_full_wdith.png';



class CustomFull extends Component {
  render() {

    return (
        <div className="custom-full-wrapper">
            <img src={customfull} className="customfull"/>
        </div>
    );
}
}

export default CustomFull;
