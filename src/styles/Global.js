import { createGlobalStyle } from 'styled-components'
import Montserrat from 'typeface-montserrat'
import Raleway from 'typeface-raleway'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
        font-weight: 300;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
        font-weight: 600;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
        font-weight: 800;
    }

    @font-face {
        font-family: 'Raleway';
        src: url(${Raleway});
        font-weight: 600;
    }

    *, *:before, *:after{
    box-sizing: border-box;
  }

    body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 14px;
        color: black;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }
`

export default GlobalStyle
