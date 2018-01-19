import React from 'react'
import styled from 'styled-components'

import './style.scss'

const Buttons = () => {
  const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred; 
  border-radius: 3px;
`

  // We're extending Button with some extra styles
  const TomatoButton = Button.extend`
        color: tomato;
        border-color: tomato;
`
  return (
    <div className="type">
      <h1>Buttons</h1>
      <p>
        Lorem ipsum dolor sit amet, id diam laudem sea.
        His zril discere accusam in. Equidem delenit detracto mei id, quo bonorum propriae
        ut, ne nobis inimicus duo. Nec malis virtute et.
      </p>
      <Button> Hello!</Button>
      <TomatoButton>Test two!</TomatoButton>
    </div>
  )
}

export default Buttons
