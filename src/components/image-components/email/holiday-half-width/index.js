import React, { Component } from 'react';
import './style.scss';
import holidayhalf from './holiday_half_width.png';



class HolidayHalf extends Component {
  render() {

    return (
        <div className="holi-half-wrapper">
            <img src={holidayhalf} className="holiday-half"/>
        </div>
    );
}
}

export default HolidayHalf;
