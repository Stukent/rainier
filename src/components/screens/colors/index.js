import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

  
  



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
                    <h1>Mimic Social</h1>
                    <div className="co-wrapper">
                    
                        <div className="nav-section">
                            <span className="cat-name">Navigation Colors:</span>

                            <div className="color-grid">
                                <div className="color-box sidebar">
                                    <span>Sidebar</span>
                                    <span>#181F25</span>
                                </div>

                                <div className="color-box logo-wrapper">
                                    <span>Logo</span>
                                    <span>#242F38</span>
                                </div>

                                <div className="color-box button">
                                    <span>Button</span>
                                    <span>#2F363C</span>
                                </div>

                                <div className="color-box clicked-button">
                                    <span>Clicked Button</span>
                                    <span>#257E37</span>
                                </div>

                                <div className="color-box sim-button">
                                    <span>Sim Button</span>
                                    <span>#30A648</span>
                                </div>
                            </div>

                        </div>

                        <div className="social-section">
                            <span className="cat-name">Social Media Colors:</span>

                            <div className="color-grid">
                                <div className="color-box facebook">
                                    <span>Facebook</span>
                                    <span>#3B5998</span>
                                </div>

                                <div className="color-box linkedin">
                                    <span>LinkedIn</span>
                                    <span>#0077B5</span>
                                </div>

                                <div className="color-box twitter">
                                    <span>Twitter</span>
                                    <span>#55ACEE</span>
                                </div>

                                <div className="color-box pinterest">
                                    <span>Pinterest</span>
                                    <span>#BD081C</span>
                                </div>

                                <div className="color-box youtube">
                                    <span>Youtube</span>
                                    <span>#CD201F</span>
                                </div>

                                <div className="color-box instagram">
                                    <span>Instagram</span>
                                    <span>#E1306C</span>
                                </div>

                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="mp-colors">
                    <h1>Mimic Pro</h1>

                    <div className="co-wrapper">
                        <div className="pro-nav">
                            <span className="cat-name">Navigation Colors:</span>
                            <div className="color-grid">
                                <div className="color-box sidebar-pro">
                                    <span>Sidebar</span>
                                    <span>#192327</span>
                                </div>

                                <div className="color-box logo-pro">
                                    <span>Logo</span>
                                    <span>#243339</span>
                                </div>

                                <div className="color-box pro-head">
                                    <span>Headers</span>
                                    <span>#5B7992</span>
                                </div>

                                <div className="color-box nav-act">
                                    <span>Hover Topbar</span>
                                    <span>#CDD8DF</span>
                                </div>

                                <div className="color-box topbar">
                                    <span>Topbar</span>
                                    <span>#EFF2F4</span>
                                </div>
                            </div>
                        </div>

                        <div className="pro-table">
                            <span className="cat-name">Table Colors:</span>
                            <div className="color-grid">
                                <div className="color-box table-color">
                                    <span>Table</span>
                                    <span>#192327</span>
                                </div>

                                <div className="color-box table-dropdown">
                                    <span>Table Dropdown</span>
                                    <span>#324A52</span>
                                </div>

                                <div className="color-box pro-head">
                                    <span>Hover Tabs</span>
                                    <span>#5B7992</span>
                                </div>

                                <div className="color-box dropdown">
                                <span>Dropdown</span>
                                <span>#EFF3F5</span>
                                </div>

                                <div className="color-box table-head">
                                    <span>Table Head</span>
                                    <span>#F5F5F5</span>
                                </div>
                            </div>
                        </div>

                        <div className="pro-text">
                            <span className="cat-name">Text Colors:</span>
                            <div className="color-grid">
                                <div className="color-box pro-text">
                                    <span>Bodycopy</span>
                                    <span>#222222</span>
                                </div>


                                <div className="color-box dec-one">
                                    <span>Decision</span>
                                    <span>#846D4F</span>
                                </div>

                                <div className="color-box dec-two">
                                    <span>Decision</span>
                                    <span>#BE4636</span>
                                </div>

                                <div className="color-box dec-three">
                                    <span>Decision</span>
                                    <span>#257D57</span>
                                </div>

                                <div className="color-box dec-four">
                                    <span>Decision</span>
                                    <span>#E07615</span>
                                </div>

                                <div className="color-box dec-five">
                                    <span>Decision</span>
                                    <span>#6D58D8</span>
                                </div>
                            </div>

                            
                        </div>

                        <div className="pro-alerts">
                            <span className="cat-name">Alert Colors:</span>
                            <div className="color-grid">
                                <div className="color-box pro-warn">
                                    <span>Warning</span>
                                    <span>#F4BF4D</span>
                                </div>

                                <div className="color-box pro-alert">
                                    <span>Alert</span>
                                    <span>#F04124</span>
                                </div>

                                <div className="color-box red-light">
                                    <span>"Red Light"</span>
                                    <span>#BE4636</span>
                                </div>

                                <div className="color-box green-light">
                                    <span>"GreenLight"</span>
                                    <span>#43AC6A</span>
                                </div>

                            </div>

                            
                        </div>
                        
                    </div>
                    
                </div>

                </div>
        </div>

    );
}
}

export default Colorspage;
