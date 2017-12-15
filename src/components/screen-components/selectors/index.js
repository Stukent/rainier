import React, { Component } from 'react';
import './style.scss';



class Selectors extends Component {
    render() {

      return (
        <div className="selectors">
            <form className="select-form">
                <h3>Take your pick!</h3>
                <label for="contactChoice1">
                <input className="selector-radio" type="radio" id="contactChoice1"
                name="picker" />
                <strong className="selector-strong">Pick me, me, me!</strong></label>

                <label for="contactChoice2">
                <input className="selector-radio" type="radio" id="contactChoice2"
                name="picker" />
                <strong className="selector-strong-two">NO! Pick me!</strong></label>

                <label for="contactChoice3">
                <input className="selector-radio" type="radio" id="contactChoice3"
                name="picker"/>
                <strong className="selector-strong-two">Y'all need to chill...</strong></label>
                
            </form>
        
        </div>
      );
    }
  }
  
  export default Selectors;
  
