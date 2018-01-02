import React, { Component } from 'react';
import './style.scss';
import socialshield from './mimic-social.svg';



class SocialShield extends Component {
  render() {

    return (
        <div className="social-shield-wrapper">
            <img src={socialshield} className="social-shield"/>
        </div>
    );
}
}

export default SocialShield;
