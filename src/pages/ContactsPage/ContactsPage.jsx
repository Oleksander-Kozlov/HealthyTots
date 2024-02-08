
import { NavLink } from "react-router-dom";
import Map from "../../components/Map/Map";

import {
  ContactH3,
  InfoWrapper,
  SocialMediaLink,
  SocialMediaLinkWrapper,
  Text,
  MainContainer,
  RotatedBackground,
  FacebookIcon,
  InstaIcon,
  LinkToForm,
  LinkContainerContactPage,
  ContactsDiv,
  CotactTitle,
} from "./ContactsPage.styled";


const ContactsPage = () => {
  return (
    <MainContainer
   
    >
      <RotatedBackground />
      <LinkContainerContactPage style={{}}>
        <NavLink to="/">
          <p style={{color:"#94b0b7"}}> Головна /</p>
        </NavLink>
        <p >&nbsp;Контакти</p>
      </LinkContainerContactPage>

      <CotactTitle>Контакти</CotactTitle>
      <InfoWrapper>
        <ContactsDiv>
          <ContactH3>Адреса</ContactH3>
          <Text>м.Ладижин, Наконечного 131Є</Text>
          <ContactH3>Часи прийому:</ContactH3>
          <Text>
            Пн. - Пт.: 09:00 - 19:00
            <br />
            Сб. - Нд.: 11:00 - 17:00
          </Text>
          <ContactH3>Teлефон:</ContactH3>
          <Text> + 38 (097) 5240670</Text>
          <ContactH3>Пошта:</ContactH3>
          <Text>Solomko_neo@ukr.net</Text>
          <ContactH3>Ми у соціальних мережах:</ContactH3>
          <SocialMediaLinkWrapper>
            <SocialMediaLink
              href="https://www.instagram.com/healthytots.pediatriya/?igshid=MzMyNGUyNmU2YQ%3D%3D"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="link to Instagram"
              title="Instagram"
            >
              <InstaIcon />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.facebook.com/SolomkoLiudmyla"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="link to Facebook"
              title="Facebook"
            >
              <FacebookIcon />
            </SocialMediaLink>
          </SocialMediaLinkWrapper>
          {/* <SocialLinks /> */}
          
            
              <LinkToForm to="/#form">Записатися на прийом</LinkToForm>
            
       
        </ContactsDiv>
        <Map />
        {/* <MapWrapper></MapWrapper> */}
      </InfoWrapper>
    </MainContainer>
  );
};

export default ContactsPage;
