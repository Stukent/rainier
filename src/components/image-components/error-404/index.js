import React, { Component } from 'react';
import './style.scss';
import error404 from './404-error.gif';



class Error404 extends Component {
  render() {

    return (
        <div className="error-wrapper">
            <img src={error404} className="error"/>
        </div>
    );
}
}

export default Error404;
