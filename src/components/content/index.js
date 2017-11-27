import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import Typefaces from '../typefaces';
import Colors from '../colors';
import Buttons from '../buttons';
import Alerts from '../alerts';
import Navs from '../navigation';




class Content extends Component {
  render() {

    return (
        <div className="contenido">
            <div className="main-title">
            Rainier
            </div>
            <div className="intro">
                <p>
                    For starters, this is a styleguide for the startup called Stukent. Yet, as it is in an open source repository it can and is shared 
                    for the use of any.
                </p>
                <p>
                    With that said, this styleguide contains components used throughout the simulations and some guidelines for
                    future developers to follow and to change as styles change and programs grow.
                </p>
            </div>
            <div className="wrapper">
                <Typefaces />
                <Colors/>
                <Buttons />
            </div>
                <Alerts />
                <Navs />
           
        </div>
    );
}
}

export default Content;
