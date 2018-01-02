import React, { Component } from 'react';
import './style.scss';
import proBlack from './mimic-pro-black.svg';



class ProBlack extends Component {
  render() {

    return (
        <div className="black-pro-wrapper">
            <img src={proBlack} className="mimic-pro-black"/>
        </div>
    );
}
}

export default ProBlack;
