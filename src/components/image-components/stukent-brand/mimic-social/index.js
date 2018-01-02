import React, { Component } from 'react';
import './style.scss';
import social from './mimic-social.svg';



class MimicSocial extends Component {
  render() {

    return (
        <div className="social-wrapper">
            <img src={social} className="mimic-social"/>
        </div>
    );
}
}

export default MimicSocial;
