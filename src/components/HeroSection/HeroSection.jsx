
import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import { 

  H1,
  HeroBtn,
  Hero_Wrapper,
  
} from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <section
      style={{
        paddingTop: "40px",
        background: "pink",
      }}
    >
      <Container_Wrapper
        style={{
          background: "gray",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Hero_Wrapper>
          <H1>
            Healthy Tots: де кожен<br></br> маленький пацієнт - великий
            пріоритет.
          </H1>
          <HeroBtn>Записатися на прийом</HeroBtn>
        </Hero_Wrapper>
      
      </Container_Wrapper>
    </section>
  );
};
export default HeroSection;
