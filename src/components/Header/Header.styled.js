import styled from "styled-components";
// import { Link } from "react-router-dom";
export const Header_container = styled.header`
  text-align: center;
  padding: 0px;
  margin-bottom: 80px;
  background-color: White;
  /* position: fixed;  
top: 0;  
z-index: 100;  
width: 100%;   */


/* position: sticky;
  top: 0;
  z-index: 10; */
`;

// header {
//     margin: 0;
//     font-family: Arial, Helvetica, sans-serif;
//     background-color: #123;
//     color: white;
//     min-height: 50vh;
//     padding: 0px;
//     position: static;
//     top: 0;
//   }
  
export const Header_upperLine = styled.div`
  display: flex;
  justify-content: center;
    gap:143px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Contact_container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Navigation_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
height: 29px;
background-color: #BDDFEF;

`
export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;


`

export const PhoneNumber = styled.a`
display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
`
