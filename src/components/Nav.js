import React from 'react'
import logo from '../images/logoblk.png'
import { Header, Container, HeaderWrap, Logo } from '../styles'

// const scroll = (e, section) => {
//   e.preventDefault()
//   document.getElementById(section).scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//   })
// }

const Nav = () => (
    <Header>
        <Container>
            <HeaderWrap>
                <Logo>
                    <a href="/">
                        <img src={logo} alt="Frankie Valentine" />
                    </a>
                </Logo>
            </HeaderWrap>
        </Container>
    </Header>
)

export default Nav;