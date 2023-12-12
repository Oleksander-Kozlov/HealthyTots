import AboutUsSection from "../../components/AboutUsSection/AboutUSSection";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";


import Appointment_Section from "../../components/Appointment/AppointmentSection";
// import { Navigation, Navigation_Container } from "../../components/Header/Header.styled";

import HeroSection from "../../components/HeroSection/HeroSection";
// import { Link_styled } from "../../Global.styled";

import {
  FeedBacks_Section,
  Main_Container,
  Container_Wrapper,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <Main_Container>
            {/* <Navigation_Container>
        <Navigation>
          <Link_styled to="/">Головна</Link_styled>
          <Link_styled to="/doctors">Лікарі</Link_styled>
          <Link_styled to="/services">Послуги</Link_styled>
          <Link_styled to="/blog">Блог</Link_styled>
          <Link_styled to="/contacts">Контакти</Link_styled>
        </Navigation>
      </Navigation_Container> */}
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
