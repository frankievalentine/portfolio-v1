import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { HomeDiv, HomeNav, NavItem } from '../styles'

const scroll = (e, section) => {
  e.preventDefault()
  document.getElementById(section).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const Home = () => (
  <StaticQuery
    query={graphql`
      query JumboImage {
        file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
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
        <Img fluid={data.file.childImageSharp.fluid} />
      </HomeDiv>
    )}
  />
)

export default Home
