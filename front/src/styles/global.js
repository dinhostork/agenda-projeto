import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    *:focus {
    outline: 0 !important;
    }
    buton::-moz-focus-inner {
   border: 0;
    }
    html, body, #root {
        min-height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased !important;
    }
    button {
        cursor: pointer;
    }
    a{
        outline: none;
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }
`;