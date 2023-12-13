import AboutUsSection from "../../components/AboutUsSection/AboutUSSection";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import Appointment_Section from "../../components/Appointment/AppointmentSection";
import HeroSection from "../../components/HeroSection/HeroSection";

import {
  FeedBacks_Section,
  Main_Container,
  Container_Wrapper,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <Main_Container>
      <HeroSection />
      <AboutUsSection />
      <AdvantagesSection />
      <FeedBacks_Section>
        <Container_Wrapper>
          <h2>Відгуки</h2>
        </Container_Wrapper>
      </FeedBacks_Section>
      <Appointment_Section />
    </Main_Container>
  );
};

export default HomePage;
