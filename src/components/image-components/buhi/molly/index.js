import React, { Component } from 'react';
import './style.scss';
import molly from './molly.svg';



class Molly extends Component {
  render() {

    return (
        <div className="molly-wrapper">
            <img src={molly} className="molly"/>
        </div>
    );
}
}

export default Molly;
