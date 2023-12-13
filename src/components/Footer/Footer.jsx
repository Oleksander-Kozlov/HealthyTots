import {
  Contacts,
  CopyrightContainer,
  UpperFooterContainer,
  Navigation_Footer,
  FooterContainer,
  LogoLinkContainer,
  LinkStyledFooter,
  StyledText,
} from "./Footer.styled";
import logoHT from "../../assets/logoHT.png";


import { Contact_container } from "../Header/Header.styled";
import SocialLinks from "./SocialLinks/SocialLinks";
import { PiCopyrightBold, PiPhoneFill } from "react-icons/pi";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <FooterContainer>
      <UpperFooterContainer>
        <LogoLinkContainer>
          <img
            src={logoHT}
            alt="logoHT"
            style={{ width: "122px", height: "94px" }}
          />
          <Navigation_Footer>
            <LinkStyledFooter to="/">Головна </LinkStyledFooter>
            <LinkStyledFooter to="/doctors">Лікарі</LinkStyledFooter>
            <LinkStyledFooter to="/services">Послуги</LinkStyledFooter>
            <LinkStyledFooter to="/blog">Блог</LinkStyledFooter>
            <LinkStyledFooter to="/contacts">Контакти</LinkStyledFooter>
          </Navigation_Footer>
        </LogoLinkContainer>

        <Contacts>
          <StyledText>Адреса:</StyledText>
          <Contact_container>
          <TiLocation color="#8CD4FA" size={24} />
            <StyledText>м.Ладижин,Наконечного 131Є</StyledText>
          </Contact_container>

          <Contact_container>
          <PiPhoneFill color="#8CD4FA" size={24} />
            <StyledText style={{ color: "#BDDFEF" }}>+ 38 (097) 5240670</StyledText>
          </Contact_container>
          <SocialLinks />
        </Contacts>
      </UpperFooterContainer>

      <CopyrightContainer>
        <PiCopyrightBold color="#8CD4FA"/>
        <StyledText>Healthy Tots. Всі права захищені. 2024</StyledText>
      </CopyrightContainer>
    </FooterContainer>
  );
};
export default Footer;
