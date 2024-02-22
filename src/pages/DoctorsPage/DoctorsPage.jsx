import Appointment_Section from "../../components/Appointment/AppointmentSection";
import DoctorCard from "../../components/DoctorCard/DoctorCard";

import {
  DoctorSection,
  DoctorsContainer,
  DoctorsH2,
  UlContainer,
} from "./DoctorsPage.styled";

import doctor from "../../assets/JSONs/doctors.json";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import LinkContainer from "../../components/LinkContainer/LinkContainer";


const DoctorsPage = () => {
  const {pathname} = useLocation();
  
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
      <LinkContainer title={pathname} />
       
        <DoctorsH2>Лікарі</DoctorsH2>

        <UlContainer>
          {parsedData.map((data) => (
            <DoctorCard key={data.id} data={data}></DoctorCard>
          ))}
        </UlContainer>
      </DoctorsContainer>
      <Appointment_Section key="AppointmentOnDoctorPage"  style={{ maxWidth: "1200px" }} />
    </DoctorSection>
  );
};

export default DoctorsPage;
