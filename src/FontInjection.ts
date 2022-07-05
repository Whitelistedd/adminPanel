import { createGlobalStyle } from 'styled-components';
import Nunito from "./assets/fonts/Nunito-Medium.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 300;
        src: url(${Nunito});
    }
`