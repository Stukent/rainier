import React, { Component } from 'react';
import './style.scss';
import raj from './raj.svg';



class Raj extends Component {
  render() {

    return (
        <div className="raj-wrapper">
            <img src={raj} className="raj"/>
        </div>
    );
}
}

export default Raj;
