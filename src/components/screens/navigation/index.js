import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Ui from './ui-ex.svg';
import desk from './desk-lap.svg';
import tablet from './tablet.svg';
import smartphone from './smartphone.svg';
import Sidebar from '../../screen-components/sidebar/';
import DisplaySidebar from '../../screen-components/display-sidebar/';
import MobileBar from '../../screen-components/mobile-bar/';
import {Topbar} from 'timp';
import Bottombar from '../../screen-components/bottombar/';

  



class NaviScreen extends Component {
  render() {

    return (
        <div className="contenido">
            <div className="intro">
                <div className="main-title">
                    Navigation
                </div>
                <div className="intro-text">
                    <p>
                      Here are the colors used throughout both simulations! 
                      This color guide contains colors used in text, header, navigation, links, etc. 
                      More is to be added as we dive into the creation of new components for our projects.
                    </p>
                </div>
            </div>

            <div className="responsive">
                <img src={Ui} className="ui-ex"/>
                <div className="sizes">
                    <h2>Responsiveness</h2>
                    <p>Navigation, along with other layout components, will vary depending on the screen size and resolution of the monitor your audience uses. The end goal is to make it available to everyone.</p>
                    <p> <strong> Why is responsiveness important for navigation?</strong> </p>
                    <p>Your audience needs to navigate through the site and if your menu isn't working, their experience is jeopardized.</p>
                    <div className="slider-wrapper">
                        <div className="slider">
                    </div>
                    
                    </div>

                </div>

            </div>

            <div className="navs">
                <h2>Our Sidebar</h2>
                <p>Both <strong> Mimic Pro</strong> and <strong>Mimic Social</strong> have sidebars and also top navigation. There are a few rules for the sidebar component and how it should look concerning the screen size and resolution. </p>
               
                <div className="nav-hierachy">
                    <div className="side">
                        <Sidebar>
                            
                            <div className="decisions">
                                <span>Decisions</span>
                                <ul className="sidebar-list">
                                    <li><a href="#">Menu Item</a></li>
                                    <li><a href="#">Menu Item</a></li>
                                    <li><a href="#">Menu Item</a></li>
                                </ul>
                            </div>

                            <div className="hints-section">
                                <span>Hints</span>
                                <ul className="sidebar-list">
                                    <li><a href="#">Menu Item</a></li>
                                    <li><a href="#">Menu Item</a></li>
                                    <li><a href="#">Menu Item</a></li>
                                </ul>
                            </div>

                        </Sidebar>
                        <div className="nav-text">
                            <img src={desk} />
                            <p>
                            The <strong>Sidebar</strong> component shows up at bigger screens - <strong>greater than 1024px</strong>. The sidebar supports the simulation with optimal information ranging from decisions to hints for the user to complete in order to finish the simulations. 
                            </p>
                            <strong>It consistes of:</strong>
                            <ul>
                                <li>Hints</li>
                                <li>Decisions</li>
                                <li>Logos</li>
                            </ul>
                            <p><em>To find exact size and resolutions for all screens go to <a href="http://screensiz.es/"  target="_blank">screensiz.es</a>.</em></p>
                        </div>

                    </div>

                    <div className="short">
                        <div className="nav-text">
                        <img src={tablet} />
                            <p>
                                The smaller the screen size, for example <strong>1024px to 750px</strong>, the smaller the sidebar. Things tend to get a bit trickier here due to the fact that words would take space in the sidebar. Items in menus are to slide to the side if you decide to use the sidebar.
                            </p>
                        </div>  
                        <div className="smaller-sidebar">
                            <DisplaySidebar/>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="mobile-menu-container">
                        <MobileBar/>
                        </div>
                        <div className="nav-text">
                        <img src={smartphone}/>
                            <p>
                            The <strong>Sidebar</strong> component turns into a top bar for navigation as soon as it hits smartphone size, <strong>750px and less.</strong> This menu is required to have a dropdown menu activated when clicked on the proper <a href="https://material.io/icons/" target="_blank">material icon</a>.
                            </p>
                        </div>
                   
                    </div>

                    <span className="code-link"><strong>To help visualize the interaction and responsiveness go to this </strong><a href="https://codepen.io/romipaintero/pen/goMvdL" target="_blank">codepen</a>.</span>

                </div>
               
               <div className="bottom-bar">
                <h2>Our Top and Bottom Bar</h2>
                <p>The two top and bottom bars serve the same purpose as the sidebar above. While the topbar contains page navigation and profile cards, the bottom bar contains sliders with hints, decisions, and progress bars.</p>
                <strong>Top Navigation Bar</strong>
                <p>Basic items belong here such as links to other pages within the simulations and profile information dropdown. For example: landing pages, ad campaigns, product catalog, etc.</p>
                <Topbar />
                <strong>Bottom Tool Bar</strong>
                <p>This bar is for more complex items. On this one the simulation is to track hints, decisions, progress, notifications, and warnings.</p>
                
                <Bottombar />
                
               </div>
                

            </div>
            
        </div>

    );
}
}

export default NaviScreen;
