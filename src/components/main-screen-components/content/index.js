import React from 'react'

import './style.scss'

import Intro from '../intro'
import Typefaces from '../typefaces'
import Colors from '../colors'
import Buttons from '../buttons'
import Alerts from '../alerts'
import Navs from '../navigation'

const Content = () => (
  <div className="contenido">
    <Intro />
    <div className="wrapper">
      <Typefaces />
      <Colors />
      <Buttons />
    </div>
    <Alerts />
    <Navs />

  </div>
)

export default Content
