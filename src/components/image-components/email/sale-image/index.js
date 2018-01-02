import React, { Component } from 'react';
import './style.scss';
import saleimg from './sale_image.png';



class SaleImg extends Component {
  render() {

    return (
        <div className="sale-wrapper">
            <img src={saleimg} className="sale-imgr"/>
        </div>
    );
}
}

export default SaleImg;
