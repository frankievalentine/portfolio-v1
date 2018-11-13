import styled from 'styled-components'
import { LoadLogo } from './Animations'

// LOADING SCREEN
export const FirstLoad = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.hidden ? 0 : '100vw')};
  height: 100vh;
  background-color: black;
  visibility: ${props => (props.hidden ? 'hidden' : '')};
  transition: all 0.5s ease;
  transition-delay: 0.5s;
  z-index: 1000;
  img {
    width: 60px;
    animation: ${LoadLogo} 1.5s;
    visibility: ${props => (props.hidden ? 'hidden' : '')};
    transform: ${props => (props.hidden ? 'scale(0)' : '')};
    transition: all 0.5s ease;
  }
`

// CONTAINER
export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(6, min-content);
  grid-template-columns: min-content 1fr repeat(3, minmax(min-content, 140px)) 1fr min-content;
`

// HEADER
// export const MainHeader = styled.header`
//   grid-column: span 6;
//   display: flex;
//   justify-content: space-between;
//   margin: 50px;

//   @media screen and (max-width: 500px) {
//     margin: 40px;
//   }

//   img {
//     width: 25px;

//     @media screen and (max-width: 500px) {
//       width: 20px;
//     }
//   }
// `

// HOME
export const HomeDiv = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;

  h1 {
    color: #525252;
    font-size: 25px;
    font-weight: 300;
    text-align: center;
    margin: 0;
  }
`

export const HomeNav = styled.nav`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
`

export const HomeImg = styled.img`
  width: 752px;
  height: 653px;

  @media screen and (max-width: 775px) {
    width: 450px;
    height: 390px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    height: 303px;
  }
`

export const NavItem = styled.a`
  font-family: 'Raleway', sans-serif;
  font-size: 12px;
  position: relative;
  margin: 5px;
  color: #a6a6a6;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: -10px;
    height: 2px;
    width: 0;
    background-color: #54ddc9;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #54ddc9;
    &:after {
      opacity: 1;
      left: 0;
      width: 100%;
    }
  }
`

export const SectionH1 = styled.h1`
  color: #525252;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media screen and (max-width: 775px) {
    font-size: 25px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`

export const SectionH2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (max-width: 775px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`

export const SectionLink = styled.a`
  position: relative;
  color: #525252;
  font-weight: 600;
  margin-left: 3px;

  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: -9px;
    height: 2px;
    width: 0;
    background-color: #54ddc9;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #54ddc9;
    &:after {
      opacity: 1;
      left: 0;
      width: 100%;
    }
  }
`

// ABOUT
export const AboutSection = styled.section`
  grid-column: 4 / 5;
  grid-row: 3 / 4;
`

export const AboutItem = styled.a`
  display: block;
  margin-top: 20px;
  color: #525252;
  font-size: 20px;
  font-weight: 600;

  &:before {
    content: '';
    position: relative;
    height: 100%;
    opacity: 0;
    border: 2px solid;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #54ddc9;
    &:before {
      opacity: 1;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 775px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`

// PERSONAL
export const PersonalSection = styled.section`
  grid-column: 4 / 5;
  grid-row: 4 / 5;
`

export const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 15px;

  @media screen and (max-width: 500px) {
    grid-gap: 10px;
  }
`

// CONTACT
export const ContactSection = styled.section`
  grid-column: 4 / 5;
  grid-row: 5 / 6;
`

// FOOTER
export const FooterSection = styled.footer`
  grid-column: 4 / 5;
  grid-row: 6 / 7;

  span {
    font-size: 12px;
    display: flex;
    justify-content: center;
    margin: 100px;

    @media screen and (max-width: 775px) {
      text-align: center;
    }
  }
`
