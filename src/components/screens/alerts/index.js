import React, { Component } from 'react';
import './style.scss';
import Alert from '../../screen-components/alert';
import PopUp from '../../screen-components/pop-up';

  
const errormessage = "Lorem ipsum dolor sit amet, ornatus omnesque periculis cu nam. Quo id ridens nostro praesent."



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

                <div className="alert-wrapper">
                    <Alert kind="green-alert" alert="Good job!"> {errormessage} </Alert>
                    <Alert kind="red-alert" alert="Oh no!"> {errormessage} </Alert>
                    <Alert kind="warning-yellow" alert="Watch out!"> {errormessage} </Alert>
                    <Alert kind="bright-error" alert="What happened!?"> {errormessage} </Alert>
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
                <Alert kind="green-alert" alert="Good Job!"> {errormessage} </Alert>
                <Alert kind="red-alert" alert="Oh no!"> {errormessage} </Alert>
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

            <div className="pop-ups-wrapper">
                <h2>Pop-up Alerts</h2>
                <p>Another choice for alerts is a pop up. Depending on the situation what these will do is have the main content with an overlay and then show the pop-up so that it stands-out.</p>

                <div className="popup-alert">
                    <PopUp />
                    <p>If you notice, there is not an "x" to help the user exit the pop-up, they have to click on the button in order to ex out. This neither adds or reduces steps to comply with the pop-up alert interruption.</p>
                    <p><strong>You can only use one style of alert and notification, not mix and matching.</strong></p>
                </div>
            
            </div>


        </div>

    );
}
}

export default Alertscreen;
