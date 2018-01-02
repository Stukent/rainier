import React, { Component } from 'react';
import './style.scss';
import stukent from './stukent.svg';



class Stukent extends Component {
  render() {

    return (
        <div className="stu-logo-wrapper">
            <img src={stukent} className="stukent"/>
        </div>
    );
}
}

export default Stukent;
