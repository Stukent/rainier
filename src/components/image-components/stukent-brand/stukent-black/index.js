import React, { Component } from 'react';
import './style.scss';
import stukentblack from './stukent-black.svg';



class StukentBlack extends Component {
  render() {

    return (
        <div className="stu-black-wrapper">
            <img src={stukentblack} className="stukent-black"/>
        </div>
    );
}
}

export default StukentBlack;
