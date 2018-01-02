import React, { Component } from 'react';
import './style.scss';
import featuredfull from './feature_product_full_width.png';



class FeaturedFull extends Component {
  render() {

    return (
        <div className="feat-full-wrapper">
            <img src={featuredfull} className="featured-full"/>
        </div>
    );
}
}

export default FeaturedFull;
