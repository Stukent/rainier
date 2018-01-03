import React, { Component } from 'react';
import './style.scss';
import blackshield from './mimic-shield-black.svg';



class Blackshield extends Component {
  render() {

    return (
        <div className="social-shield-wrapper">
            <img src={blackshield} className="blackshield"/>
        </div>
    );
}
}

export default Blackshield;
