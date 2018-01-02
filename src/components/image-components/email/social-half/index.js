import React, { Component } from 'react';
import './style.scss';
import socialhalf from './social_half_width.png';



class SocialHalf extends Component {
  render() {

    return (
        <div className="social-wrapper">
            <img src={socialhalf} className="social-half"/>
        </div>
    );
}
}

export default SocialHalf;
