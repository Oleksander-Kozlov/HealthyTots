import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  /* font-family: var(--font-main);
  font-weight: 400;
  font-style: normal;
  font-size: 14px; */
  
  width: 100%;
  height: 100vh;
  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  color: inherit;
}
section{
    padding-bottom: 120px;
}

`