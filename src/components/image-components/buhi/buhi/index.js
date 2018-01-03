import React, { Component } from 'react';
import './style.scss';
import buhi from './banner.png';



class Buhi extends Component {
  render() {

    return (
        <div className="buhi-wrapper">
            <img src={buhi} className="buhi-logo"/>
        </div>
    );
}
}

export default Buhi;
