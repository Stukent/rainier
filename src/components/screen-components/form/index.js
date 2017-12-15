import React, { Component } from 'react';
import './style.scss';



class Form extends Component {
    render() {

      return (
        <div className="form-sec">
            <form>
                <span className="x-mark">&times; </span>
                <div className="header">
                    <strong>Create Your Ad Campaign</strong>
                </div>
                <label className="form-label">
                    Campaign Name
                    <input className="form-input" type="text"/>
                </label>
                <label className="form-label">
                    Location
                    <input className="form-input" type="text"/>
                </label>
                <label className="form-label">
                    Networks
                    <input className="form-input" type="text"/>
                </label>
                <label className="form-label"> 
                    Budget
                    <input className="form-input" type="number"/>
                </label>
                <div className="button-wrapper">
                    <button className="form-btn btn">Save</button>
                    <button className="no-form btn">Nevermind</button>
                </div>
                
            </form>
        </div>
      );
    }
  }
  
  export default Form;
  
