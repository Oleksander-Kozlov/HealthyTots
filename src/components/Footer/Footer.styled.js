import { Link } from "react-router-dom";
import styled from "styled-components";
export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 48px 120px;
gap:20px;
background-color: #0D3F7C;
`

export const UpperFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 960px;
    /* gap: 50px; */
height: 226px;

padding: 0 120px;

`
export const LogoLinkContainer = styled.div`
display: flex;
align-items: center;
gap: 121px;
`


export const Navigation_Footer = styled.nav`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
gap: 12px;
`

export const LinkStyledFooter = styled(Link)`
font-family: Balsamiq Sans;
font-size: 24px;
text-align: center;
  /* color: #0d3f7c; */
  color: #BDDFEF;
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;
export const StyledText = styled.p`
color: #BDDFEF;
`

export const Contacts = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 12px;
 
`

export const CopyrightContainer = styled.div`
display: flex;
align-items: center;
gap: 8px;
`