import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AboutUsSection from "../../components/AboutUsSection/AboutUSSection";
import AdvantagesSection from "../../components/AdvantagesSection/AdvantagesSection";
import Appointment_Section from "../../components/Appointment/AppointmentSection";
import HeroSection from "../../components/HeroSection/HeroSection";

import {
  FeedBacks_Section,
  Main_Container,
  Container_Wrapper,
} from "./HomePage.styled";

function HomePage (){
  const ref = useRef(null)
    const formRef = useRef(null);
  const location = useLocation();

    useEffect(() => {
      if (location.hash === "#form") {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);
  const handleClick = ()  => {ref.current?.scrollIntoView({behavior:"smooth"})}
    return (
      <Main_Container>
        <HeroSection
          handleClick={handleClick}
        />
        <AboutUsSection />
        <AdvantagesSection />
        <FeedBacks_Section>
          <Container_Wrapper>
            <h2>Відгуки</h2>
          </Container_Wrapper>
        </FeedBacks_Section>
        <Appointment_Section
          forwardedRef={ref}
        />
      </Main_Container>
    );
}

export default HomePage;
