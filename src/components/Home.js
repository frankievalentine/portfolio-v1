import React from 'react'
import me from '../images/me.jpg'
import { HomeDiv, HomeNav, NavItem, HomeImg } from '../styles'

const scroll = (e, section) => {
  e.preventDefault()
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const Home = () => (
  <HomeDiv>
    <h1 style={{ 'padding-top': '90px' }}>Frankie Valentine</h1>
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
    <HomeImg src={me} alt="Frankie Valentine portrait" />
  </HomeDiv>
)

export default Home
