import React from 'react'
import me from '../images/me.jpg'
import { HomeDiv, HomeNav, NavItem } from '../styles'

const scroll = (e, section) => {
  e.preventDefault()
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const Home = () => (
  <HomeDiv>
    <h1>Frankie Valentine</h1>
    <HomeNav>
      <NavItem href="#about" onClick={e => scroll(e, 'about')}>
        About
      </NavItem>
      <NavItem href="#work" onClick={e => scroll(e, 'work')}>
        Work
      </NavItem>
      <NavItem href="#contact" onClick={e => scroll(e, 'contact')}>
        Contact
      </NavItem>
    </HomeNav>
    <img src={me} alt="Frankie Valentine portrait" style={{ width: '752px', height: '653px' }} />
  </HomeDiv>
)

export default Home
