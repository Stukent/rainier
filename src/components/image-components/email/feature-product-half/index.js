import React from 'react'
import './style.scss'
import featuredhalf from './featured_product_half_width.png'


const FeaturedHalf = () => (
  <div className="featured-half-wrapper">
    <img src={featuredhalf} className="featured-half" />
  </div>
)

export default FeaturedHalf
