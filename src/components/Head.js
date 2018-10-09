import React from 'react'
import logo from '../images/logoblk.png'
import { MainHeader, Toggle } from '../styles'

const Head = () => (
      <MainHeader>
        <a href="/">
          <img src={logo} alt="ValentineDev logo" />
        </a>
        <Toggle>
          <input type="checkbox" id="toggle" />
          <span />
        </Toggle>
      </MainHeader>
)

export default Head
