import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import Sidebar from '../../elbert-comp/sidebar/';





class Navs extends Component {
  render() {

    return (
        <div className="navigations">
            <h1>Navigation</h1>
            <p>
                Lorem ipsum dolor sit amet, id diam laudem sea. His zril discere accusam in.
            Equidem delenit detracto mei id, quo bonorum propriae ut, ne nobis inimicus duo. 
            Nec malis virtute et.
            </p>

            <Sidebar/>
        </div>
    );
}
}

export default Navs;
