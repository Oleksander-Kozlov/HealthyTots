import styled from "styled-components";
// import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
export const Header_container = styled.header`
  position: relative;
  &::before {
     @media screen and (max-width: 767.98px) {
    content: " ";
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    height: 24px;
    background-color: #bddfef;}
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 0px;   
    background-color: white;   
  }
`;


export const BurgerMenu_icon = styled(SlMenu)`
  cursor: pointer;
  color: #8cd4fa;
  size: 40px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Header_upperLine = styled.div`
  position: relative;
  
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 40px 20px 12px 20px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 143px;
    padding: 20px 40px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    /* width: 1440px; */
  }
`;

export const Contact_container = styled.a`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export const Contact_container_tel = styled.a`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

export const Phone_Number = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    
    width: max-content;
  }
`;

export const Navigation_Container = styled.div`
display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
    background-color: #bddfef;
    /* position: fixed;
    top: 0; */
    /* position:-webkit-sticky; position:fixed; top:0px; */

    width: 100%;
  }
`;
export const Navigation = styled.nav`
display: none;
  @media screen and (min-width: 768px) {
    padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  }
`;

// export const PhoneNumber = styled.a`
// display: flex;
//     align-items: center;
//     gap: 8px;
//     font-size: 18px;
// `
