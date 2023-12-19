import { Link } from "react-router-dom";
import Appointment_Section from "../../components/Appointment/AppointmentSection";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
// import DoctorsList from "../../components/DoctorsList/DoctorsList";
import { LinkContainer } from "../../components/BlogDetailsPage/BlogDetailsPage.styled";
import { DoctorsContainer, UlContainer } from "./DoctorsPage.styled";
import doctors from "../../../doctors.json";

const DoctorsPage = () => {
  return <section style={{ marginBottom: "48px", paddingBottom: "0px", paddingTop: "4px" }}>
    
    <DoctorsContainer>
    <LinkContainer>
        <Link to="/">
          <p style={{ color: "#94B0B7" }}> Головна /</p>
        </Link>
        <p style={{ fontSize: "14px" }}>&nbsp;Лікарі</p>
      </LinkContainer>
      <h2>Лікарі</h2>
      {/* <DoctorsList/> */}
      <UlContainer>{doctors.map((data) => (
          <DoctorCard key={data.id} data={data}></DoctorCard>
        ))}
      </UlContainer>
<Appointment_Section/>
    </DoctorsContainer>
    
    </section>
    ;
  };
  
  export default DoctorsPage;
  