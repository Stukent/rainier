import React, { Component } from 'react';
import './style.scss';
import ewoke from './ewoke.svg';
import PropTypes from 'prop-types';



class Alert extends Component {
     

    render() {

      return (
        <div className="alerts-wrap">
            <div className={this.props.kind}>
                <img src={ewoke} />
                <span className="call-action">{this.props.alert}</span>
                <p>{this.props.children}</p>
            </div>
        </div>
      );

    }
  }
  
  export default Alert;
  
Alert.propTypes = {
    kind: PropTypes.string,
    alert: PropTypes.string
  };
