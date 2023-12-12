import { Contacts, Footer_container, Navigation_Footer } from "./Footer.styled";
import logoHT from "../../assets/logoHT.png";
import location_icon from "../../assets/location_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import { Link_styled } from "../../Global.styled";
import { Contact_container } from "../Header/Header.styled";
import SocialLinks from "./SocialLinks/SocialLinks";


const Footer = () => {
    return (
        
        <Footer_container>
<img src={logoHT} alt="logoHT" />
          <Navigation_Footer>
          <Link_styled to="/">Головна </Link_styled>
          <Link_styled to="/doctors">Лікарі</Link_styled>
          <Link_styled to="/services">Послуги</Link_styled>
          <Link_styled to="/blog">Блог</Link_styled>
          <Link_styled to="/contacts">Контакти</Link_styled>
        </Navigation_Footer>

        <Contacts>
<p>Адреса:</p>
                <Contact_container>
                    
          <img src={location_icon} alt="location_icon" />
          <p>м.Ладижин,Наконечного 131Є</p>
        </Contact_container>
        
        <Contact_container>
          <img src={phone_icon} alt="phone_icon" />
          <p>+ 38 (097) 5240670</p>
          </Contact_container>
          <SocialLinks/>

        </Contacts>


            </Footer_container>
            
            )
};
export default Footer;
