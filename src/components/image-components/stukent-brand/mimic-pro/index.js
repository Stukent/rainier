import React, { Component } from 'react';
import './style.scss';
import pro from './mimic-pro.svg';



class ProLogo extends Component {
  render() {

    return (
        <div className="pro-logo-wrapper">
            <img src={pro} className="pro-logo"/>
        </div>
    );
}
}

export default Prologo;
