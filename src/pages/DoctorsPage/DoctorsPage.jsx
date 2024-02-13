import doctors from "../../../doctors.json";
import Appointment_Section from "../../components/Appointment/AppointmentSection";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import {

  LinkContainer,
} from "../../components/BlogDetailsPage/BlogDetailsPage.styled";
import {
  DoctorSection,
  DoctorsContainer,
  DoctorsH2,
  UlContainer,
} from "./DoctorsPage.styled";
import { NavLinks } from "../ContactsPage/ContactsPage.styled";

const DoctorsPage = () => {
  return (
    <DoctorSection>
      <DoctorsContainer>
        <LinkContainer style={{marginBottom:0}}>
          <NavLinks to="/">
            <p style={{ color: "#94B0B7" }}> Головна /</p>
          </NavLinks>
          <p >&nbsp;Лікарі</p>
        </LinkContainer>
        <DoctorsH2>Лікарі</DoctorsH2>
        
        <UlContainer>
          {doctors.map((data) => (
            <DoctorCard key={data.id} data={data}></DoctorCard>
          ))}
        </UlContainer>
      </DoctorsContainer>
      <Appointment_Section style={{    maxWidth: "1200px"}} />
    </DoctorSection>
  );
};

export default DoctorsPage;
