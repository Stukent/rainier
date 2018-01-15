import React, { Component } from 'react';
import './style.scss';


class Colorspage extends Component {
  render() {

    return (
        <div className="contenido">
            <div className="intro">
                <div className="main-title">
                    Color Guide
                </div>
                <div className="intro-text">
                    <p>
                      Here are the colors used throughout both simulations! 
                      This color guide contains colors used in text, header, navigation, links, etc. 
                      More is to be added as we dive into the creation of new components for our projects.
                    </p>
                </div>
            </div>
            <div className="section-wrapper">

                <div className="ms-colors">
                    <h1>Mimic Social Colors</h1>
                    <p>We have narrowed down colors for <strong>Mimic Social</strong> down to three main colors.</p>
                    <div className="color-wrapper">
                        <div className="main-color-ms color-info">
                            <span class="sub-header">
                                Main color
                            </span>
                            <p><em><strong>Usage:</strong></em> This green hue is to be used on the navigation bar, or sidebar if you prefer, as complementary color. That is to be used on main headers, buttons, and links.</p>
                            <div className="color-box ms-green">
                                <span className="color-code">#30a648</span>
                            </div>

                        </div>

                        <div className="dark-color-ms color-info">
                            <span class="sub-header">
                                    Main color's shadow
                            </span>
                            <p><em><strong>Usage:</strong></em> This darker tone of green is used in Mimic Social as a sub-header colors for after main header (meaning h1's) in order to brief someone on a next reading section. It is also to be used for link effects, hovers, etc.</p>
                            <div className="color-box dark-ms-green">
                                <span className="color-code">#257E37</span>
                            </div>    
                        </div>

                        <div className="light-color-ms color-info">
                            <span class="sub-header">
                                    Lighter Green
                            </span>
                            <p><em><strong>Usage:</strong></em> This one lighter green is to be used also for effects on either lights, buttons, and/or anyother way.</p>
                            <div className="color-box lighter-ms-green">
                                <span className="color-code">#97c774</span>
                            </div>    
                        </div>
                            
                    </div>

                       
                </div>
                    
            </div>

                <div className="mp-colors">
                    <h1>Mimic Pro</h1>
                    <p>Colors for <strong>Mimic Pro</strong> are analagous hues of blue. This blue is not to be confused with <strong>Home/Donaldson's</strong> blue, for that one is brighter than Pro's.</p>
                    <div className="color-wrapper">
                        <div className="light-color-ms color-info">
                            <span class="sub-header">
                                    Main Color
                            </span>
                            <p><em><strong>Usage:</strong></em> This hue is to be used on the navigation bar, or sidebar, in order to bring complementary harmony to the application's style. This is also to be used for main headers (h1's) and links.</p>
                            <div className="color-box mp-blue">
                                <span className="color-code">#386fa4</span>
                            </div>    
                        </div>
                        
                        <div className="dark-color-ms color-info">
                            <span class="sub-header">
                                    Main color's shadow
                            </span>
                            <p><em><strong>Usage:</strong></em> Just like the darker hue on Mimic Social's blue above, we use this hue of blue in order to bring emphasis to certain things such as sub-header, hovers, buttons, etc.</p>
                            <div className="color-box mp-dark-blue">
                                <span className="color-code">#133c55</span>
                            </div>    
                        </div>

                        <div className="lighter-color-ms color-info">
                            <span class="sub-header">
                                    Lighter Hues
                            </span>
                            <p><em><strong>Usage:</strong></em> For accentuation, these two hues are used for effects as well, whether they're found on links, buttons, or emphasis text these will work.</p>
                            <div className="color-box mp-lighter-blue">
                                <span className="color-code">#5899e2</span>
                            </div>  
                            <div className="color-box mp-lighter-blue-two">
                                <span className="color-code">#85b4e9</span>
                            </div>   
                        </div>
                    </div>
                    
                </div>

                <div className="universal-colors">
                    <h2>Universal Colors</h2>
                    <p>This section is where all the universal hues will be for all simulations. Things that can be altered if consulted with before hand.</p>
                    
                    <div className="color-wrapper">
                        <div className="sidebar-color-u color-info">
                            <span class="sub-header">
                                    Sidebar
                            </span>
                            <p><em><strong>Usage:</strong></em> This dark hue is for the use of navigation background colors. Whether it is a sidebar, top bar, or bottom bar this is the color to be displayed for them, as well as for tables within simulations. More specifically, Mimic Pro. </p>
                            <div className="color-box sidebar-color">
                                <span className="color-code"> #181f25</span>
                            </div>  
                        </div>

                        <div className="logo-wrapper-color color-info">
                            <span class="sub-header">
                                   Logo Wrapper
                            </span>
                            <p><em><strong>Usage:</strong></em> A lighter hue than the color used for the navigation. This is to wrap the logo, if desire and just as seen on current version, in the navigation bar. It can also be used to hover on links <strong>ONLY</strong> if there is not another color such as the main colors for Mimic Pro and Mimic Social to be in use. </p>
                            <div className="color-box logo-wrapper">
                                <span className="color-code"> #242f38</span>
                            </div>  
                        </div>

                        <div className="bodycopy-color color-info">
                            <span class="sub-header">
                                  Bodycopy
                            </span>
                            <p><em><strong>Usage:</strong></em> Pretty straight forward. This dark color is used for the main bodycopy of all simulations. </p>
                            <div className="color-box bodycopy">
                                <span className="color-code"> #222222</span>
                            </div>  
                        </div>

                        <div className="warning-colors color-info">
                            <span class="sub-header">
                                  Warnings
                            </span>
                            <p><em><strong>Usage:</strong></em> just like a traffic light, we have our red, yellow, and green. So, pretty simple! Red is for error alerts, yellow is for warnings, and green for good alerts!  </p>
                            <div className="color-box error-red">
                                <span className="color-code"> #BE4636</span>
                            </div>  
                            <div className="color-box bright-error">
                                <span className="color-code"> #F04124</span>
                            </div>
                            <div className="color-box warning-yellow">
                                <span className="color-code"> #F4BF4D</span>
                            </div> 
                            <div className="color-box passing-green">
                                <span className="color-code"> #43AC6A</span>
                            </div> 
                        </div>
                    </div>
        
                </div>

        </div>

    );
}
}

export default Colorspage;
