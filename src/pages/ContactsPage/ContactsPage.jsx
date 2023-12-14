import MakeAppointmentButton from "../../components/MakeAppointmentButton/MakeAppointmentButton";
import Map from "../../components/Map/Map";
import { Main_Container } from "../HomePage/HomePage.styled";
import { ContactsWrapper, H2, H3, InfoWrapper, SocialMediaLink, SocialMediaLinkWrapper, Text } from "./ContactsPage.styled";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";

const ContactsPage = () => {
  
  return (
    <Main_Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <a style={{ alignSelf: "flex-start" }}>
        Головна<a>/контакти</a>
      </a>

      <H2>Контакти</H2>
      <InfoWrapper>
        <ContactsWrapper>
          <H3>Адреса</H3>
          <Text>м.Ладижин, Наконечного 131Є</Text>
          <H3>Часи прийому:</H3>
          <Text>
            Пн. - Пт.: 09:00 - 19:00
            <br />
            Сб. - Нд.: 11:00 - 17:00
          </Text>
          <H3>Teлефон:</H3>
          <Text> + 38 (097) 5240670</Text>
          <H3>Пошта:</H3>
          <Text>Solomko_neo@ukr.net</Text>
          <H3>Ми у соціальних мережах:</H3>
          <SocialMediaLinkWrapper>
            <SocialMediaLink
              href="https://www.instagram.com/healthytots.pediatriya/?igshid=MzMyNGUyNmU2YQ%3D%3D"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="link to Instagram"
              title="Instagram"
            >
              <RiInstagramFill style={{ fontSize: 40, fill: "#BDDFEF" }} />
            </SocialMediaLink>
            <SocialMediaLink
              href="https://www.facebook.com/SolomkoLiudmyla"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="link to Facebook"
              title="Facebook"
            >
              <RiFacebookBoxFill style={{ fontSize: 40, fill: "#BDDFEF" }} />
            </SocialMediaLink>
          </SocialMediaLinkWrapper>
          {/* <SocialLinks /> */}
          <MakeAppointmentButton handleClick={() => alert("Запишись")}>
            Записатися на прийом
          </MakeAppointmentButton>
        </ContactsWrapper>
        <Map />
        {/* <MapWrapper></MapWrapper> */}
      </InfoWrapper>
    </Main_Container>
  );
  };
  
  export default ContactsPage;
  