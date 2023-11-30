import logoHT from "../../assets/logoHT.png";
import location_icon from "../../assets/location_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import {Contact_container, Header_container, Header_upperLine, Link_styled, Navigation } from "./Header.styled";


const Header = () => {
  return (
    <Header_container>
      <Header_upperLine>
        <Contact_container>
          <img src={location_icon} alt="location_icon" />
          <p>м.Ладижин,Наконечного 131Є</p>
        </Contact_container>
        <img src={logoHT} alt="logoHT" />
        <Contact_container>
          <img src={phone_icon} alt="phone_icon" />
          <p>+ 38 (097) 5240670</p>
        </Contact_container>
      </Header_upperLine>
      <Navigation>
        <Link_styled to="/">Головна</Link_styled>
        <Link_styled to="/doctors">Лікарі</Link_styled>
        <Link_styled to="/services">Послуги</Link_styled>
        <Link_styled to="/blog">Блог</Link_styled>
        <Link_styled to="/contacts">Контакти</Link_styled>
      </Navigation>
    </Header_container>
  );
};

export default Header;
