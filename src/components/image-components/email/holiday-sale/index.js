import React, { Component } from 'react';
import './style.scss';
import holidaysale from './holiday_sale_image.png';



class HolidaySale extends Component {
  render() {

    return (
        <div className="holi-sale-wrapper">
            <img src={holidaysale} className="holi-sale"/>
        </div>
    );
}
}

export default HolidaySale;
