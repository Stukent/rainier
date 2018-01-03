import React, { Component } from 'react';
import './style.scss';
import featurebanner from './feature_product_banner.png';



class FeaturedBanner extends Component {
  render() {

    return (
        <div className="featured-ban-wrapper">
            <img src={featurebanner} className="featuredbanner"/>
        </div>
    );
}
}

export default FeaturedBanner;
