import React from 'react'
import { NavLink } from 'react-router-dom'

import StukentBlack from '../../image-components/stukent-brand/stukent-black'
import SocialBlack from '../../image-components/stukent-brand/mimic-social-black'
import ProBlack from '../../image-components/stukent-brand/mimic-pro-black'
import IntroBlack from '../../image-components/stukent-brand/mimic-intro-black'

import Blackshield from '../../image-components/stukent-brand/mimic-shield-black/'
import SocialShieldblack from '../../image-components/stukent-brand/mimic-social-shield-black/'
import Proshieldblack from '../../image-components/stukent-brand/pro-shield-black/'
import IntroShield from '../../image-components/stukent-brand/intro-shield/'

import Error404 from '../../image-components/error-404/'
import Error500 from '../../image-components/error-500/'

import LoaderBig from '../../image-components/loader-big/'
import Loader from '../../image-components/loader/'

import EmailLogo from '../../image-components/email/email-logo/'
import CustomBanner from '../../image-components/email/custom-banner'
import HolidayBanner from '../../image-components/email/holiday-banner/'
import FeaturedBanner from '../../image-components/email/feature-product-banner/'

import FeaturedHalf from '../../image-components/email/feature-product-half/'
import CustomHalf from '../../image-components/email/custom-half-width'
import HolidayHalf from '../../image-components/email/holiday-half-width/'
import LoyalHalf from '../../image-components/email/loyal-custom-half'
import SocialHalf from '../../image-components/email/social-half'
import CouponHalf from '../../image-components/email/coupon-half'

import FeaturedFull from '../../image-components/email/featured-product-full/'
import CustomFull from '../../image-components/email/custom-full-width/'
import HolidaySale from '../../image-components/email/holiday-sale'
import SaleImg from '../../image-components/email/sale-image'

import Buhi from '../../image-components/buhi/buhi'
import Jill from '../../image-components/buhi/jill/'
import Molly from '../../image-components/buhi/molly/'
import Raj from '../../image-components/buhi/raj/'
import Sally from '../../image-components/buhi/sally/'
import Sue from '../../image-components/buhi/sue/'

import './style.scss'

const Graphics = () => (
  <div className="contenido">
    <div className="intro">
      <div className="main-title">
            Icons & Graphics
      </div>
      <div className="intro-text">
        <p>
          The graphics we use across the simulations range from logos to practice
          on email marketing and landing page creation. This is a little of a
          graphics catalog and explaining where they go.
        </p>
      </div>
    </div>
    <div className="logos">
      <h2>Logos</h2>
      <p>
        We use about 6 types of logos throughout the simulations in color and white.
        These would be the logos for Stukent, Mimic Pro, and Mimic Social.
      </p>
    </div>
    <div className="main-logos">
      <StukentBlack />
      <SocialBlack />
      <ProBlack />
      <IntroBlack />
    </div>
    <div className="shield-logos">
      <Blackshield />
      <SocialShieldblack />
      <Proshieldblack />
      <IntroShield />
    </div>
    <div className="animations">
      <h2>Animations and Loaders</h2>
      <p>
        In both simulations when there is an error on the page, depending on whether
        is 404 or 500, we get these animations to appear on the page along with a link
         to take them back to &quot;safety&quot;.
      </p>

      <div className="errors">
        <Error404 />
        <Error500 />
      </div>
      <p>
        These loaders are found in <strong>Mimic Pro</strong> and are used when
      there&apos;s a page loading andwhile the simulation running.
      </p>
      <div className="loaders">
        <Loader />
        <LoaderBig />
      </div>

    </div>

    <div className="email">
      <h2>Mimic Pro&apos;s Email Marketing</h2>
      <p>
        In Mimic Pro when students reach <strong>Round 4</strong> they are required
        create their first email campaign, in Mimic Intro it is found in <strong>Round 1</strong>.
        In these email templates they are to add these images depending on their desires and budget.
      </p>
      <div className="email-img">
        <div className="banners">
          <EmailLogo />
          <CustomBanner />
          <HolidayBanner />
          <FeaturedBanner />
        </div>

        <div className="halfwidth">
          <CustomHalf />
          <FeaturedHalf />
          <HolidayHalf />
          <LoyalHalf />
          <SocialHalf />
          <CouponHalf />
        </div>

        <div className="largebanners">
          <FeaturedFull />
          <CustomFull />
          <HolidaySale />
          <SaleImg />
        </div>

      </div>
    </div>

    <div className="buhi">
      <h2>Buhi Branding</h2>
      <p>
        In Mimic Social you are given a scenario based on <strong>Buhi Bags</strong>.
        The simulation contains characters to help the student throughout the simulation.
      </p>

      <div className="buhi-wrapper">
        <div className="sim-img">
          <Buhi />
        </div>
        <div className="avys">
          <Jill />
          <Sally />
          <Raj />
          <Molly />
          <Sue />


        </div>
      </div>

    </div>

    <div className="icons">
      <h2>Icons</h2>
      <p>For icons, going back to the <NavLink to="/navigation">Navigation Page</NavLink>, we can obtain icons that we desire from <a href="https://material.io/icons/">Material Design</a> which is created by Google and their styleguide.</p>
    </div>

  </div>

)

export default Graphics
