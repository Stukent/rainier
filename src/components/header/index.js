import './style.css'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Header = ({children, misc, actions}) => {
  return (
    <header>
      
        <button className="btn show-sidebar" >
          <i className="fa fa-bars" aria-hidden="true"/> Menu
        </button>
      
        <button className="btn hide-sidebar" >
          <i className="fa fa-bars" aria-hidden="true"/> Hide Menu
        </button>
      
    </header>
  )
}

export default Header