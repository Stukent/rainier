import React from 'react'
import './style.scss'
import saleimg from './sale_image.png'


const SaleImg = () => (
  <div className="sale-wrapper">
    <img src={saleimg} className="sale-imgr" />
  </div>
)

export default SaleImg
