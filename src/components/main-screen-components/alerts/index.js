import React, { Component } from 'react';
import './style.scss';




class Alerts extends Component {
  render() {

    return (
        <div className="alerts">
            <h1>Alerts & Notifications</h1>
            <p>Lorem ipsum dolor sit amet, id diam laudem sea. His zril discere accusam in.
            Equidem delenit detracto mei id, quo bonorum propriae ut, ne nobis inimicus duo. 
            Nec malis virtute et.</p>
            <div className="wrapper-alert">
                <div className="green-alert"></div>
                <div className="red-alert"></div>
                <div className="blue-alert"></div>
                <div className="yellow-alert"></div>
            </div>
        </div>
    );
}
}

export default Alerts;
