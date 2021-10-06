import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary-color: #7159c1;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #141414;
    color: #ffffff;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 2px;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body,
  input,
  textarea,
  select,
  button {
    font-weight: 400;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
