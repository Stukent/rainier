import React, { Component } from 'react';
import './style.scss';
import Close from './close.svg';



class ModalInvert extends Component {
    render() {

      return (
        <div className="invert-container">
  
            <div className="modal-invert">
                <div className="exit">
                    <img src={Close}/>
                </div>
                <div className="modal-content-invert">
                <h2>Can't find your size?</h2>
                <p>You can always feel free to send us an email with your size and shoe model and we will send it to your house with a 50% discount of shipping!</p>
              </div>
              
              <div className="call-to-action">
                  <button className="back-invt"><a href="#"> Go back</a></button>
                  <button className="cart-invt"><a href="#"> Add To Cart </a></button>
                </div>
            </div>
    </div>

      );
    }
  }
  
  export default ModalInvert;