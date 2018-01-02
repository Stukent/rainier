import React, { Component } from 'react';
import './style.scss';
import featuredhalf from './featured_product_half_width.png';



class FeaturedHalf extends Component {
  render() {

    return (
        <div className="featured-half-wrapper">
            <img src={featuredhalf} className="featured-half"/>
        </div>
    );
}
}

export default FeaturedHalf;
