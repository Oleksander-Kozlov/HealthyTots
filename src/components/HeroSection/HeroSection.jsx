import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";

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
        <div>
          <h1>
            Healthy Tots: де кожен<br></br> маленький пацієнт - великий
            пріоритет.
          </h1>
          <button>Записатися на прийом</button>
        </div>
        
      </Container_Wrapper>
    </section>
  );
};
export default HeroSection;
