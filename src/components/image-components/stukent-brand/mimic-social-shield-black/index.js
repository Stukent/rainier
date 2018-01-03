import React, { Component } from 'react';
import './style.scss';
import socialshieldblack from './mimic-social-shield-black.svg';



class SocialShieldblack extends Component {
  render() {

    return (
        <div className="social-shieldb-wrapper">
            <img src={socialshieldblack} className="social-shield-black"/>
        </div>
    );
}
}

export default SocialShieldblack;
