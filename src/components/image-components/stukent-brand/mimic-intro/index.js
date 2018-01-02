import React, { Component } from 'react';
import './style.scss';
import intro from './mimic-intro.svg';



class MimicIntro extends Component {
  render() {

    return (
        <div className="intro-logo-wrapper">
            <img src={intro} className="mimic-intro"/>
        </div>
    );
}
}

export default MimicIntro;
