import React from 'react'
import styled from 'styled-components'

import './style.scss'


const Colors = () => {
  const Color = styled.div`
    /* This renders the buttons above... Edit me! */
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50px;
    background-color: red;
  `
  const Colortwo = Color.extend`
    /* This renders the buttons above... Edit me! */
    background-color: blue;
    `

  return (
    <div className="type">
      <h1>Colors</h1>
      <p>
            Lorem ipsum dolor sit amet, id diam laudem sea.
            His zril discere accusam in. Equidem delenit detracto mei id, quo bonorum
            propriae ut, ne nobis inimicus duo. Nec malis virtute et.
      </p>
      <div className="colors">
        <ul>
          <li><Color /> #e3e3e3</li>
          <li><Colortwo /> #e3e3e3</li>
        </ul>
      </div>
    </div>
  )
}

export default Colors
