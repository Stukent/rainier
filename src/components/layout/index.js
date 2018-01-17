import React from 'react'
import './style.scss'
import Navbar from './navbar'
import Footer from './footer/'


const Layout = ({ children }) => (
  <div> <Navbar />
    {children}
    <Footer />
  </div>
)

export default Layout
