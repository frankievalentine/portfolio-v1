import styled from 'styled-components'
import { LoadLogo } from './Animations'

// export const dayTheme = {}

// export const nightTheme = {}

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

// HEADER
export const Header = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;

  &.HeaderScroll {
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
    backdrop-filter: blur(20px);
  }
`

export const HeaderGroup = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: start;
`

export const Logo = styled.div`
  > a {
    height: 80px;
    display: flex;
    align-items: center;
  }
  img {
    width: 25px;
  }
`

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  margin-right: 40px;
  width: 48px;
  height: 30px;
  justify-self: end;

  &:before {
    content: 'AM';
    position: absolute;
    left: -35px;
    top: 3px;
    font-size: 16px;
    font-weight: 600;
  }

  &:after {
    content: 'PM';
    position: absolute;
    right: -35px;
    top: 3px;
    font-size: 16px;
    font-weight: 600;
    color: #749ed7;
  }

  input {
    display: none;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffe250;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      border-radius: 34px;
      background-color: white;
      transition: all 0.4s;
    }
  }

  input:checked + span:before {
    transform: translateX(18px);
  }

  input:checked + span {
    background-color: rgb(8, 35, 57);
  }
`

// HERO
export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 35vh;
`

export const HeroContainer = styled.div`
  margin: 0 auto;

  h1 {
    font-size: 20px;
    font-weight: 300
  }
`

// HERO IMG

// ABOUT

// PERSONAL

// CONTACT

// COPYRIGHT
