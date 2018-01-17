import React from 'react'
import './style.scss'
import holidaybanner from './holiday_banner.png'


const HolidayBanner = () => (
  <div className="holiday-ban-wrapper">
    <img src={holidaybanner} className="holidaybanner" />
  </div>
)

export default HolidayBanner
