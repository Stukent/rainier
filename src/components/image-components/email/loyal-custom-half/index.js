import React, { Component } from 'react';
import './style.scss';
import loyalhalf from './loyal_customer_half_width.png';



class LoyalHalf extends Component {
  render() {

    return (
        <div className="loyal-half-wrapper">
            <img src={loyalhalf} className="loyal-half"/>
        </div>
    );
}
}

export default LoyalHalf;
