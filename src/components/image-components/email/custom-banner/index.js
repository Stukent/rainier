import React, { Component } from 'react';
import './style.scss';
import custombanner from './custom_banner.png';



class CustomBanner extends Component {
  render() {

    return (
        <div className="custom-ban-wrapper">
            <img src={custombanner} className="custombanner"/>
        </div>
    );
}
}

export default CustomBanner;
