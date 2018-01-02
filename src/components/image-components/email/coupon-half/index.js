import React, { Component } from 'react';
import './style.scss';
import coupon from './coupon_half_width.png';



class CouponHalf extends Component {
  render() {

    return (
        <div className="couponhalf-wrapper">
            <img src={coupon} className="coupon-half"/>
        </div>
    );
}
}

export default CouponHalf;
