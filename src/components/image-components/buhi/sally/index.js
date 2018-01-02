import React, { Component } from 'react';
import './style.scss';
import sally from './sally.svg';



class Sally extends Component {
  render() {

    return (
        <div className="sally-wrapper">
            <img src={sally} className="sally"/>
        </div>
    );
}
}

export default Sally;
