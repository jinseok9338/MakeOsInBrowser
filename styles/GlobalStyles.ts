import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  padding: 0;
}

body {
  font-family: system-ui -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
  user-select: none;
}

button {
  background-color: transparent;
  font-family: inherit;
}

ol,
ul {
  list-style-type: none;
}
`;

export default GlobalStyle;
