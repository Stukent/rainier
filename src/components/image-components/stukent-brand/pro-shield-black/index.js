import React, { Component } from 'react';
import './style.scss';
import proshieldblack from './pro-shield-black.svg';



class Proshieldblack extends Component {
  render() {

    return (
        <div className="pro-shieldb-wrapper">
            <img src={proshieldblack} className="pro-shield-black"/>
        </div>
    );
}
}

export default Proshieldblack;
