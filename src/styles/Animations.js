import { keyframes } from 'styled-components'

export const LoadLogo = keyframes`
  0% {
    transform: translateY(-100px) rotate(180deg);
    opacity: 0;
  }
  25% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
  50% {
    transform: scale(.8);
  }
  75% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1) rotate(0);
  }
`
