import React, { Component } from 'react';
import './style.scss';
import mimicShield from './mimic-shield.svg';



class MimicShield extends Component {
  render() {

    return (
        <div className="shield-wrapper">
            <img src={mimicShield} className="mimic-shield"/>
        </div>
    );
}
}

export default MimicShield;
