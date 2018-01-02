import React, { Component } from 'react';
import './style.scss';
import holidaybanner from './holiday_banner.png';



class HolidayBanner extends Component {
  render() {

    return (
        <div className="holiday-ban-wrapper">
            <img src={holidaybanner} className="holidaybanner"/>
        </div>
    );
}
}

export default HolidayBanner;
