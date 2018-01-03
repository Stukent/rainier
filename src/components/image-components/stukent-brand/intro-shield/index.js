import React, { Component } from 'react';
import './style.scss';
import introshield from './intro-shield.svg';



class IntroShield extends Component {
  render() {

    return (
        <div className="intro-shield-wrapper">
            <img src={introshield} className="introshield"/>
        </div>
    );
}
}

export default IntroShield;
