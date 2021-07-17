import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }
    body {
        background-color: ${variables.colors.brown};
    }
    body, input, button {
        font-family: 'Lato', sans-serif;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 1.6rem;
    }
    button {
        cursor: pointer;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    
`;