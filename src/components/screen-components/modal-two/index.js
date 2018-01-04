import React, { Component } from 'react';
import './style.scss';
import Close from './close.svg';



class ModalSmall extends Component {
    render() {

      return (
        <div className="mocontainer">
  
            <div className="modal-small">
                <div class="exit">
                    <img src={Close}/>
                </div>
            <div class="modal-content">
                <h2>Can't find your size?</h2>
                <p>You can always feel free to send us an email with your size and shoe model and we will send it to your house with a 50% discount of shipping!</p>
            </div>
            
            <div class="action">
                <button class="back-btn"><a href="#"> Go back</a></button>
                <button class="cart-btn"><a href="#"> Add To Cart </a></button>
                </div>

    </div>
    </div>

      );
    }
  }
  
  export default ModalSmall;