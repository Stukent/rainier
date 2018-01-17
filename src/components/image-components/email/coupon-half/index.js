import React from 'react'
import './style.scss'
import coupon from './coupon_half_width.png'


const CouponHalf = () => (
  <div className="couponhalf-wrapper">
    <img src={coupon} className="coupon-half" />
  </div>
)

export default CouponHalf
