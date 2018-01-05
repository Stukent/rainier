import React, { Component } from 'react';
import './style.scss';
import Close from './close.svg';



class Modal extends Component {
    render() {

      return (
        <div className="modal-container">
  
            <div className="modal">
                    <div className="exit">
                        <img src={Close}/>
                    </div>
                <div className="modal-content">
                    <div className="up-n-out">
                        <div className="brand-name">
                            <h2>Nixon Camera</h2>
                            <span>by Nixon Co.</span>
                        </div>

                        <h1 className="price">295$</h1>

                    </div>
                    
                    <div className="product-details">
                        <img src="https://images.unsplash.com/photo-1493805503700-3219b693ffcc?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=e046bd5d8c8bd47d15e32cf4b4e5ff01" />
                        
                        <div className="details-container">
                            <h4>Extended Warranty Service</h4>
                            
                            <div className="column-wrapper">
                                <ul className="one">
                                    <li>The Fortress Extended Warranty Service is provided by Fortress</li>
                                    <li>All repair services are provided by manufacturer or authorized repairers to ensure quality</li>
                                    <li>The coverage is for mechanical and electric breakdown and the repair liable is limited to 125% of the product purchase price</li>
                                </ul>
                        
                                <ul className="two">
                                    <li>The Fortress Extended Warranty Service is provided by Fortress</li>
                                    <li>All repair services are provided by manufacturer or authorized repairers to ensure quality</li>
                                    <li>The coverage is for mechanical and electric breakdown and the repair liable is limited to 125% of the product purchase price</li>
                                </ul>
                            </div>
                        </div>
                    
                        <div className="call-to-action">
                            <button className="back"><a href="#"> Go back</a></button>
                            <button className="cart"><a href="#"> Add To Cart </a></button>
                        </div>    
                    </div>
                </div>
                
            </div>
    </div>

      );
    }
  }
  
  export default Modal;