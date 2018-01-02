import React, { Component } from 'react';
import './style.scss';
import emaillogo from './company_logo.png';



class EmailLogo extends Component {
  render() {

    return (
        <div className="email-logo-wrapper">
            <img src={emaillogo} className="emaillogo"/>
        </div>
    );
}
}

export default EmailLogor;
