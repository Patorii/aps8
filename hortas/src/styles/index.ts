import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
    --white: #FFFFFF;
    --brown-600: #4E3205;
    --brown-900: #301f03;
    --brown-950: #170f02;
    --green-100: #E2FFC4;
    --green-300: #C5FF88;
    --green-600: #004F22;
    --yellow-600: #FFB300;
    --black: #000000;
}
body{
    height: 100vh;
    overflow: auto;
}
*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    font-family: Roboto, sans-serif;
}
`