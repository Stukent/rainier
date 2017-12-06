import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Leia from './leia.png';
import HappyLeia from './leia-happy.png';

  
  



class Alertscreen extends Component {
  render() {

    return (
        <div className="contenido">
            <div className="intro">
                <div className="main-title">
                    Alerts & Notifications
                </div>
                <div className="intro-text">
                    <p>
                        There are certain guidelines to follow for the <strong>alerts and notifications</strong> segment of the style guide. 
                        For example, what type of color should you use when the alert is a warning or an error? We are going to start by expanding the components used both alerts and notifications.
                    </p>
                </div>
            </div>
           
           <div className="structure">
                <h2>Structure</h2>
                <p>The alerts are divided into colors. <strong className="rudolph">Red</strong> for errors, <strong className="greeny">green</strong> for accomplishements, <strong className="jelly">yellow</strong> for warnings, and <strong className="bluey">blue</strong> for hints.</p>

                 <div className="alert-colors">
                 <div className="red-alert"></div>
                    <div className="green-alert"></div>
                    <div className="yellow-alert"></div>
                    <div className="blue-alert"></div>
                    
                </div>
                <div className="example-code">
                    <p>All colors found within our color <strong>SCSS file</strong>.</p>
                    <div className="editor" >
                
                    <pre>
                        
                {`
.green-alert {
    background-color: $alert-green;
    }

.red-alert {
    background-color: $warning-red;
}

.blue-alert {
    background-color: $alert-blue;
}

.yellow-alert {
    background-color: $alert-yellow;
}
                    `}
                </pre>
                    </div>
               </div>

           </div>

           <div className="interactions">
                <h2>Interactions</h2>
                <p>How your components interact with the users is a big topic that should not be taken lightly. When you want to meet someone, you greet them in a manner that will attract them to you. The same goes for components on the web.
                    Here are some examples of interaction. <strong>Hint: hover over them.</strong>
                </p>

                <div className="alert-interaction">
                 <div className="red-alert"></div>
                    <div className="green-alert"></div>
                    <div className="yellow-alert"></div>
                    <div className="blue-alert"></div>
                    
                </div>

                <p>...Something that also helps with user friendliness is adding a face to a message.</p>

               <div className="alert-faces">
                    <div className="red-alert">
                       <img src={Leia}/>
                       <span className="call-action">Oh no!</span>
                       <p>It seems like something's off...</p>
                    </div>
                    <div className="green-alert">
                     <img src={HappyLeia}/>
                     <span className="call-action">Good Job!</span>
                     <p>You did great! Let's review...</p>
                    </div>
               </div>

           </div>
        
            <div className="notifications">
                
                <h2>Notifications</h2>
                <p>Depending on the style of our navigation we will have different notification buttons, these are pretty straight forward.</p>
                <p>Just think about the notifications you get on your phone, you see the red bubble on top of your application, and when it is an alert it pops up or slides down from the top of your screen.</p>

                <div className="demo-bar">

                    <div className="notification bad-note"><span>!</span></div>
                    <div className="notification good-note"></div>
                    <div className="notification warn-note"></div>
                
                </div>
                <p>Color guidelines stay the same. Colors bring about meaning, meanings bring emotion. <strong>Emotion brings forth design!</strong> </p>

            </div>


        </div>

    );
}
}

export default Alertscreen;
