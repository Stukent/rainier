import React, { Component } from 'react';
import './style.scss';


class Card extends Component {
    render() {

      return (
        <div className="card-wrapper">
           <div className="card">
                <div className="img-wrapper">
                </div>
                <div className="card-info-wrapper">
                    <h3>Title Here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
           </div>
        </div>
      );
    }
  }
  
  export default Card;
  
