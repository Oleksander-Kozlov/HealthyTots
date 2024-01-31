import {
  Contacts,
  CopyrightContainer,
  UpperFooterContainer,
  Navigation_Footer,
  FooterContainer,
  LogoLinkContainer,
  LinkStyledFooter,
  StyledText,
  Nav_And_Logo_Wrapper,
  StyledTextH3,
  Contact_container_Footer,
  Contact_tel_container_Footer,
  SvgLogoFooter,
} from "./Footer.styled";


// import { Contact_container } from "../Header/Header.styled";
import SocialLinks from "./SocialLinks/SocialLinks";
import { PiCopyrightBold, PiPhoneFill } from "react-icons/pi";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <FooterContainer>
      <UpperFooterContainer>
        <Nav_And_Logo_Wrapper>
          <Navigation_Footer>
            <LinkStyledFooter to="/">Головна </LinkStyledFooter>
            <LinkStyledFooter to="/doctors">Лікарі</LinkStyledFooter>
            <LinkStyledFooter to="/services">Послуги</LinkStyledFooter>
            <LinkStyledFooter to="/blog">Блог</LinkStyledFooter>
            <LinkStyledFooter to="/contacts">Контакти</LinkStyledFooter>
          </Navigation_Footer>
          <LogoLinkContainer>
            <SvgLogoFooter/>
            {/* <SvgLogo width={122} height={94}></SvgLogo> */}
          </LogoLinkContainer>
        </Nav_And_Logo_Wrapper>
        <Contacts>
          <StyledTextH3>Адреса:</StyledTextH3>
          <Contact_container_Footer>
            <TiLocation color="#8CD4FA" size={16} />
            <StyledText> м.Ладижин, Наконечного 131Є</StyledText>
          </Contact_container_Footer>

          <Contact_tel_container_Footer>
            <PiPhoneFill color="#8CD4FA" size={16} />
            <StyledText style={{ color: "#BDDFEF" }}>
              + 38 (097) 5240670
            </StyledText>
          </Contact_tel_container_Footer>
          <SocialLinks />
        </Contacts>
      </UpperFooterContainer>

      <CopyrightContainer>
        <PiCopyrightBold color="#8CD4FA" />
        <StyledText>Healthy Tots. Всі права захищені. 2024</StyledText>
      </CopyrightContainer>
    </FooterContainer>
  );
};
export default Footer;
