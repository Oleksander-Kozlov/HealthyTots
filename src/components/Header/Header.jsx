// import logoHT from "../../assets/logoHT.png";

// import phone_icon from "../../assets/phone_icon.png";
import { TiLocation } from "react-icons/ti";
import { PiPhoneFill } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";

import {
  Contact_container,
  Header_container,
  Header_upperLine,
  Navigation,
  Navigation_Container,
  
} from "./Header.styled";
import { Link_styled } from "../../Global.styled";
import {SvgLogo} from "../SvgIcons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Header_container>
      <Header_upperLine>
        {false && (
          <Contact_container
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9D%D0%B0%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B3%D0%BE,+131%D0%84,
          +%D0%9B%D0%B0%D0%B4%D1%8B%D0%B6%D0%B8%D0%BD,+%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,
          +%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+24320/@48.6865952,29.2400918,17z/data=!3m1!4b1!4m6!3m5!1s0x40cd706198053a0d:0x17fc425a24df00ec!8m2!3d48.
          6865917!4d29.2426667!16s%2Fg%2F11t3_f2_tj?entry=ttu"
          >
            <TiLocation color="#8CD4FA" size={24} />
            м.Ладижин, Наконечного 131Є
          </Contact_container>
        )}
        {true && <SlMenu color="#8CD4FA" size={40} />}
        {/* <img src={logoHT} alt="logoHT" /> */}
        <Link to="/">
          <SvgLogo />
        </Link>
        <Contact_container href="tel:+380975240670">
          <PiPhoneFill color="#8CD4FA" size={24} />{" "}
          {false && <p>+38 (097) 5240670</p>}
        </Contact_container>
      </Header_upperLine>

      {false && (
        <Navigation_Container>
          <Navigation>
            <Link_styled to="/">Головна</Link_styled>
            <Link_styled to="/doctors">Лікарі</Link_styled>
            <Link_styled to="/services">Послуги</Link_styled>
            <Link_styled to="/blog">Блог</Link_styled>
            <Link_styled to="/contacts">Контакти</Link_styled>
          </Navigation>
        </Navigation_Container>
      )}
    </Header_container>
  );
};

export default Header;
