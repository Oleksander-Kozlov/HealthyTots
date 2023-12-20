import { Link } from "react-router-dom";
import MakeAppointmentButton from "../../components/MakeAppointmentButton/MakeAppointmentButton";
import Map from "../../components/Map/Map";

import {
  ContactsWrapper,
  H2,
  H3,
  InfoWrapper,
  SocialMediaLink,
  SocialMediaLinkWrapper,
  Text,
  MainContainer,
  RotatedBackground,
  FacebookIcon,
  InstaIcon,
  ShakeDiv,
} from "./ContactsPage.styled";

import { LinkContainer } from "../BlogDetailsPage/BlogDetailsPage.styled";

const ContactsPage = () => {
  return (
    <MainContainer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "24px",
        paddingRight: "120px",
        paddingLeft: "120px",
      }}
    >
      <RotatedBackground />
      <LinkContainer style={{ marginTop: "24px", marginBottom: "48px" }}>
        <Link to="/">
          <p style={{ color: "#94B0B7", fontSize: "20px" }}> Головна /</p>
        </Link>
        <p style={{ fontSize: "20px" }}>&nbsp;Контакти</p>
      </LinkContainer>

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
          <ShakeDiv>
            <MakeAppointmentButton handleClick={() => alert("Запишись")}>
              Записатися на прийом
            </MakeAppointmentButton>
          </ShakeDiv>
        </ContactsWrapper>
        <Map />
        {/* <MapWrapper></MapWrapper> */}
      </InfoWrapper>
    </MainContainer>
  );
};

export default ContactsPage;
