import React, { Component } from 'react';
import './style.scss';
import error500 from './500-error.gif';



class Error500 extends Component {
  render() {

    return (
        <div className="error-wrapper">
            <img src={error500} className="error"/>
        </div>
    );
}
}

export default Error500;
