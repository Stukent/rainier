import './style.scss'
import React from 'react'

const Content = (props) => {
  return (
    <div className="app-content">
      {props.children}
    </div>
  )
}

Content.propTypes = {
  children: React.PropTypes.element
}

export default Content;
