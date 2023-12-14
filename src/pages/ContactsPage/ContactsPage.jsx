import MakeAppointmentButton from "../../components/MakeAppointmentButton/MakeAppointmentButton";
import Map from "../../components/Map/Map";
import { Main_Container } from "../HomePage/HomePage.styled";
import { ContactsWrapper, H3, InfoWrapper, Text } from "./ContactsPage.styled";

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

      <h2>Контакти</h2>
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
          <Text> + 38 (097) 5240670Є</Text>
          <H3>Пошта:</H3>
          <Text>Solomko_neo@ukr.net</Text>
          <H3>Ми у соціальних мережах:</H3>
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
  