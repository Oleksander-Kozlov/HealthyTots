import { Link } from "react-router-dom";
import styled from "styled-components";
export const FooterContainer = styled.footer`
padding: 28px 0;
  background-color: #0d3f7c;
  width: 100vw;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 48px 120px;
  }
`;

export const UpperFooterContainer = styled.div`
  padding: 0 28px;
  margin-bottom: 28px;
  @media screen and (min-width: 1440px) {
    width: 960px;
    /* gap: 50px; */
    height: 226px;

    padding: 0 120px;
  }
`;

export const Nav_And_Logo_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;
export const LogoLinkContainer = styled.div`
  margin: auto;
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 121px;
  }
`;


export const Navigation_Footer = styled.nav`
display: flex;
justify-content: center;
flex-direction: column;
align-items: flex-start;
gap: 12px;
`

export const LinkStyledFooter = styled(Link)`
  text-align: center;
  font-family: Balsamiq Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #bddfef;
  &:hover,
  &:focus {
    color: #ffffff;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
`;
export const StyledTextH3 = styled.p`
text-align:left;
  color: #bddfef;
`;
export const Contact_container_Footer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
 
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;
export const StyledText = styled.p`
  color: #bddfef;
`;
export const CopyrightContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
`