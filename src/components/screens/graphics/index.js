import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logodark from './assets/brand/stukent-dark.svg';
import prodark from './assets/brand/mimicpro-dark.svg';
import socdark from './assets/brand/mimic-social-dark.svg';
import logo from './assets/brand/stukent.svg';
import mimic from './assets/brand/mimicpro.svg';
import mimicsocial from './assets/brand/mimic-social.svg';
import error404 from './assets/brand/404-error.gif';
import error500 from './assets/brand/500-error.gif';
import loader from './assets/brand/app_loading.gif';
import loaderlarge from './assets/brand/loader_large.gif';

import company from './assets/email/company_logo.png';
import custombanner from './assets/email/custom_banner.png';
import featurebanner from './assets/email/feature_product_banner.png';
import holidaybanner from './assets/email/holiday_banner.png';
import customhalf from './assets/email/custom_half_width.png';
import featuredhalf from './assets/email/feature_product_half_width.png';
import holidayhalf from './assets/email/holiday_half_width.png';
import loyalhalf from './assets/email/loyal_customer_half_width.png';
import socialhalf from './assets/email/social_half_width.png';
import customfull from './assets/email/custom_full_width.png';
import salefull from './assets/email/sale_image.png';
import featurefull from './assets/email/feature_product_full_width.png';
import holidayfull from './assets/email/holiday_sale_image.png';

import buhi from './assets/buhi/banner.png';
import molly from './assets/buhi/molly.svg';
import sure from './assets/buhi/sue.svg';
import jill from './assets/buhi/jill.svg';
import raj from './assets/buhi/raj.svg';
import sally from './assets/buhi/sally.svg';




  



class Graphics extends Component {
  render() {

    return (
        <div className="contenido">
            <div className="intro">
                <div className="main-title">
                    Icons & Graphics
                </div>
                <div className="intro-text">
                <p>The graphics we use across the simulations range from logos to practice on email marketing and landing page creation. This is a little of a graphics catalog and explaining where they go.</p>
                </div>
            </div>
            <div className="logos">
                <h2>Logos</h2>
                <p>We use about 6 types of logos throughout the simulations in color and white. These would be the logos for Stukent, Mimic Pro, and Mimic Social.</p>
            </div>
            <div className="main-logos">
                <img src={logodark} className="stu"/>
                <img src={prodark} className="pro"/>
                <img src={socdark} className="so" />
            </div>
            <div className="white-logos">
                <img src={logo} className="stu"/>
                <img src={mimic} className="pro"/>
                <img src={mimicsocial} className="pro"/>
            </div>
            <div className="animations">
                <h2>Animations and Loaders</h2>
                <p>In both simulations when there is an error on the page, depending on wether is 404 or 500, we get these animations to appear on the page along with a link to take them back to "safety".</p>
                
                <div className="errors">
                    <img src={error404}/>
                    <img src={error500}/>
                </div>
                <p>These loaders are found in <strong>Mimic Pro</strong> and are used when there's a page loading andwhile the simulation running.</p>
                <div className="loaders">
                    <img src={loader}/>
                    <img src={loaderlarge}/>
                </div>
                
            </div>

            <div className="email">
                <h2>Mimic Pro's Email Marketing</h2>
                <p>
                    In Mimic Pro when students reach <strong>Round 4</strong> they are required create their first email campaign, in Mimic Intro it is found in <strong>Round 1</strong>. In these email templates they are to add these images depending on their desires and budget.
                </p>
                <div className="email-img">
                    <img src={company} />
                    <img src={custombanner} />
                    <img src={featurebanner} />
                    <img src={holidaybanner} />

                    <div className="halfwidth">
                        <img src={customhalf} />
                        <img src={featuredhalf} />
                        <img src={loyalhalf} />
                        <img src={socialhalf} />
                        <img src={holidayhalf} />
                    </div>

                    <div className="largebanners">
                        <img src={customfull} />
                        <img src={salefull} />
                        <img src={featurefull} />
                        <img src={holidayfull} />
                    </div>
            
                </div>
            </div>
           
            <div className="buhi">
                <h2>Buhi Branding</h2>
                <p>In Mimic Social you are given a scenario based on <strong>Buhi Bags</strong>. The simulation contains characters to help the student throughout the simulation.</p>

                <div className="buhi-wrapper">
                    <div className="sim-img">
                        <img src={buhi} />
                    </div>
                    <div className="avys">
                        <img src={molly} />
                        <img src={sure} />
                        <img src={raj} />
                        <img src={jill} />
                        <img src={sally} />
                    </div>
                </div>
                
            </div>

            <div className="icons">
                <h2>Icons</h2>
                <p>For icons, going back to the <Link to="/navigation">Navigation Page</Link>, we can obtain icons that we desire from <a href="https://material.io/icons/">Material Design</a> which is created by Google and their styleguide.</p>
            </div>

        </div>

    );
}
}

export default Graphics;
