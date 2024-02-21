import Appointment_Section from "../../components/Appointment/AppointmentSection";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import { LinkContainer } from "../../components/BlogDetailsPage/BlogDetailsPage.styled";
import {
  DoctorSection,
  DoctorsContainer,
  DoctorsH2,
  UlContainer,
} from "./DoctorsPage.styled";
import { NavLinks } from "../ContactsPage/ContactsPage.styled";
import doctor from "../../assets/JSONs/doctors.json";
import { useEffect, useState } from "react";


const DoctorsPage = () => {
  const doctors = doctor
const[parsedData, setParsedData] = useState([]);

useEffect(() => {
  const storedData = localStorage.getItem("doctorData");

  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      setParsedData(parsedData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
}, []);

useEffect(() => {
  localStorage.setItem("doctorData", JSON.stringify(doctors));
}, [doctors]);

  return (
    <DoctorSection>
      <DoctorsContainer>
        <LinkContainer style={{ marginBottom: 0 }}>
          <NavLinks to="/">
            <p style={{ color: "#94B0B7" }}> Головна /</p>
          </NavLinks>
          <p>&nbsp;Лікарі</p>
        </LinkContainer>
        <DoctorsH2>Лікарі</DoctorsH2>

        <UlContainer>
          {parsedData.map((data) => (
            <DoctorCard key={data.id} data={data}></DoctorCard>
          ))}
        </UlContainer>
      </DoctorsContainer>
      <Appointment_Section style={{ maxWidth: "1200px" }} />
    </DoctorSection>
  );
};

export default DoctorsPage;
