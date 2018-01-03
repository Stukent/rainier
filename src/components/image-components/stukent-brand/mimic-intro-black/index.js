import React, { Component } from 'react';
import './style.scss';
import introblack from './mimic-intro-black.svg';



class IntroBlack extends Component {
  render() {

    return (
        <div className="intro-black-wrapper">
            <img src={introblack} className="intro-black"/>
        </div>
    );
}
}

export default IntroBlack;
