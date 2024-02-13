import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import {
  BurgerMenu_icon,
  Contact_container,
  Contact_container_tel,
  Header_container,
  Header_upperLine,
  Navigation,
  Navigation_Container,
  Phone_Number,
  Phone_icon,
  BurgerMenu,
  BurgerContainer,
  Burger_link_styled,
} from "./Header.styled";
import { Link_styled } from "../../Global.styled";
import { SvgLogo } from "../SvgIcons";
import { useState } from "react";

const Header = () => {
  const navBar = [
    {
      name: "Головна",
      link: "/",
    },
    {
      name: "Лікарі",
      link: "/doctors",
    },
    {
      name: "Послуги",
      link: "/services",
    },
    {
      name: "Блог",
      link: "/blog",
    },
    {
      name: "Контакти",
      link: "/contacts",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleBurgerMenuBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <Header_container>
      <Header_upperLine>
        <Contact_container
          href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9D%D0%B0%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B3%D0%BE,+131%D0%84,
          +%D0%9B%D0%B0%D0%B4%D1%8B%D0%B6%D0%B8%D0%BD,+%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,
          +%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+24320/@48.6865952,29.2400918,17z/data=!3m1!4b1!4m6!3m5!1s0x40cd706198053a0d:0x17fc425a24df00ec!8m2!3d48.
          6865917!4d29.2426667!16s%2Fg%2F11t3_f2_tj?entry=ttu">
          <TiLocation color="#8CD4FA" size={24} />
          м.Ладижин, Наконечного 131Є
        </Contact_container>

        <BurgerMenu_icon
          size={40}
          onClick={() => setIsMenuOpen(!isMenuOpen)}></BurgerMenu_icon>
        {isMenuOpen ? (
          <BurgerMenu onClick={handleBurgerMenuBackgroundClick}>
            <BurgerContainer>
              {navBar.map((item) => {
                return (
                  <Burger_link_styled
                    to={item.link}
                    key={item.link}
                    onClick={() => handleCloseMenu()}
                  >
                    {item.name}
                  </Burger_link_styled>
                );
              })}
     
            </BurgerContainer>
          </BurgerMenu>
        ) : (
          <></>
        )}

        <Link to="/">
          <SvgLogo width={87} height={66} />
        </Link>
        <Contact_container_tel href="tel:+380975240670">
          <Phone_icon />
          <Phone_Number> +38 (097) 5240670</Phone_Number>
        </Contact_container_tel>
      </Header_upperLine>

      <Navigation_Container>
        <Navigation>
          {navBar.map((item) => {
            return (
              <Link_styled
                to={item.link}
                key={item.link}
                state={item.link}
                onClick={() => handleCloseMenu()}
              >
                {item.name}
              </Link_styled>
            );
          })}
        </Navigation>
      </Navigation_Container>
    </Header_container>
  );
};

export default Header;
