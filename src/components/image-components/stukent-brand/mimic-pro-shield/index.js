import React, { Component } from 'react';
import './style.scss';
import proShield from './mimic-pro-shield.svg';



class ProShield  extends Component {
  render() {

    return (
        <div className="pro-shield-wrapper">
            <img src={proShield} className="pro-shield/>
        </div>
    );
}
}

export default ProShield;
