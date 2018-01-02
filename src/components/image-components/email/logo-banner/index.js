import React, { Component } from 'react';
import './style.scss';
import logobanner from './logo_banner.png';



class LogoBanner extends Component {
  render() {

    return (
        <div className="logo-ban-wrapper">
            <img src={logobanner} className="logobanner"/>
        </div>
    );
}
}

export default LogoBanner;
