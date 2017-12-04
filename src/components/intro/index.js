import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';





class Intro extends Component {
  render() {

    return (
        <div className="intro">
            <div className="main-title">
                Stukent's Styleguide
            </div>
            <div className="intro-text">
                <p>
                    For starters, this is a styleguide for the startup called Stukent. Yet, as it is in an open source repository it can and is shared 
                    for the use of any.
                </p>
                <p>
                    With that said, this styleguide contains components used throughout the simulations and some guidelines for
                    future developers to follow and to change as styles change and programs grow.
                </p>
            </div>
        </div>
    );
}
}

export default Intro;
