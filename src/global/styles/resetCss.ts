import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.dark};
    }

    button {
        cursor: pointer;
    }
`;
