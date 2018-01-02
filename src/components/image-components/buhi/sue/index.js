import React, { Component } from 'react';
import './style.scss';
import sue from './sue.svg';



class Sue extends Component {
  render() {

    return (
        <div className="sue-wrapper">
            <img src={sue} className="sue"/>
        </div>
    );
}
}

export default Sue;
