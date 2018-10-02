import { createGlobalStyle } from 'styled-components'
import Montserrat from 'typeface-montserrat'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
        font-weight: 300;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
        font-weight: 600
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat});
        font-weight: 800
    }

    *, *:before, *:after{
    box-sizing: border-box;
  }

    body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 16px;
        color: black;
        line-height: 1.45;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: #A6A6A6;
        text-decoration: none;
        transition: color .3s ease;
        &:hover{
            color: #54DDC9;
        }
    }
`

export default GlobalStyle
