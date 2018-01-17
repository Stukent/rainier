import React from 'react'
import './style.scss'
import featurebanner from './feature_product_banner.png'


const FeaturedBanner = () => (
  <div className="featured-ban-wrapper">
    <img src={featurebanner} className="featuredbanner" />
  </div>
)

export default FeaturedBanner
