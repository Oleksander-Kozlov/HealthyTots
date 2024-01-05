import { createGlobalStyle, styled } from "styled-components";
import BalsamiqSansBold from "./assets/fonts/BalsamiqSans-Bold.ttf";
import RobotoRegular from "./assets/fonts/Roboto-Regular.ttf";
// import styled from "styled-components";
import { Link } from "react-router-dom";
export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Balsamiq Sans';
  src: local('BalsamiqSansBold'), url(${BalsamiqSansBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Roboto';
  src: local('RobotoRegular'), url(${RobotoRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
}
:root {
  --font-title: 'Balsamiq Sans', sans-serif;
  --font-text: 'Roboto', sans-serif;
  --Text-color: #0C151C;
  --Orange-main: #F27B57;
}

body {
  margin: 0;
  font-family: var(--font-text);
  font-size: 14px;
  width: 100%;
  /* height: 100vh; */
  scroll-behavior: smooth;
  

}

h1,
h2{
color: var(--Orange-main);
text-align: center;
font-family: var(--font-title);
margin: 0;
font-size: 40px;
line-height: normal;
}
h3{

font-family: var(--font-title);
font-size: 16px;
color: #0D3F7C;
 @media screen and (min-width: 768px) {
  font-size: 24px;
 }
}
h4,
h5,
h6,
p {

  margin-top: 0;
  margin-bottom: 0;
}

a {
  color: var(--Text-color);
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
  border: none;
}
section{
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    padding-top: 20px;
    margin-bottom: 80px;
}

`;

export const Link_styled = styled(Link)`
  font-family: Balsamiq Sans;
  font-size: 24px;
  text-align: center;
  color: #0d3f7c;

  &:hover {
    color: #318fb5;
  }
  &:focus {
    color: #001244;
  }
  &:active {
    color: #001244;
  }
`;
