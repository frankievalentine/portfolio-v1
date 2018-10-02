import styled from 'styled-components'
import { LoadLogo } from './Animations'

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

export const Container = styled.div`
  position: relative;
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  z-index: 10;
`

export const Header = styled.header`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  height: 80px;
  z-index: 100;
`

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  > a {
    height: 80px;
    display: flex;
    align-items: center;
  }
  img {
    width: 30px;
  }
`
