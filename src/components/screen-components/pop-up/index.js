import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import ewoke from './ewoke.svg';

const popmessage = "Lorem ipsum dolor sit amet, no putent quaeque quo, id eum mundi copiosae. Cibo delectus salutatus no sea. Ius option inciderint no, et vix duis appellantur. Omnis vivendo oporteat ei nec.";

class PopUp extends Component {
     

    render() {

      return (
        <div className="popup-wrap">
            <div className="pop-up">
                <div className="popup-text-wrap">
                    <img src={ewoke}/>
                    <h2>This is an alert!</h2>
                    <p>{popmessage}</p>
                </div>
                <button className="closer">Okay, got it</button>
            </div>
        </div>
      );

    }
  }
  
  export default PopUp;
  