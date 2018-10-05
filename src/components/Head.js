import React from 'react'
import logo from '../images/logoblk.png'
import { Header, HeaderGroup, Logo, Toggle } from '../styles'

class Head extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <Header
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <HeaderGroup>
          <Logo>
            <a href="/">
              <img src={logo} alt="Frankie Valentine" />
            </a>
          </Logo>
          <Toggle>
            <input type="checkbox" id="toggle" />
            <span />
          </Toggle>
        </HeaderGroup>
      </Header>
    )
  }
}

export default Head
