import React, { Component } from 'react';
import './style.scss';
import socialblack from './mimic-social-black.svg';



class SocialBlack extends Component {
  render() {

    return (
        <div className="black-social-wrapper">
            <img src={socialblack} className="social-black"/>
        </div>
    );
}
}

export default SocialBlack;
