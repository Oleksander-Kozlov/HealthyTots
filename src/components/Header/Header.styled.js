import styled from "styled-components";
// import { Link } from "react-router-dom";
export const Header_container = styled.header`
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    height: 24px;
    background-color: #bddfef;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* text-align: center; */
    padding: 0px;
    /* margin-bottom: 80px; */
    background-color: White;

    /* position: fixed;  
top: 0;  
z-index: 100;  
width: 100%;   */
    /* position: sticky;
  top: 0;
  z-index: 10; */
  }
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
  position: relative;
  display: flex;
  padding: 40px 20px 12px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  
  @media screen and (min-width: 768px) {
    gap: 143px;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    width: 1440px;
  }
`;

export const Contact_container = styled.a`
  @media screen and (min-width: 768px){ display: flex;
  align-items: center;
  gap: 8px;}
`;

export const Navigation_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
height:53px;
background-color: #BDDFEF;
/* position: fixed;
    top: 0; */
    /* position:-webkit-sticky; position:fixed; top:0px; */
    
width: 100%;

`
export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;


`

// export const PhoneNumber = styled.a`
// display: flex;
//     align-items: center;
//     gap: 8px;
//     font-size: 18px;
// `
