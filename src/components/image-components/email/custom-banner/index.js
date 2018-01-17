import React from 'react'
import './style.scss'
import custombanner from './custom_banner.png'


const CustomBanner = () => (
  <div className="custom-ban-wrapper">
    <img src={custombanner} className="custombanner" />
  </div>
)

export default CustomBanner
