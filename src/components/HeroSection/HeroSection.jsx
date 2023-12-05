import Hero_img1 from "../../assets/Hero_img1.png";
import Hero_img2 from "../../assets/Hero_img2.png";
import Hero_img3 from "../../assets/Hero_img3.png";
import Hero_img4 from "../../assets/Hero_img4.png";
import Hero_img5 from "../../assets/img55.png";
import { Container_Wrapper } from "../../pages/HomePage/HomePage.styled";
import { 
  About_us_Image,
  H1,
  HeroBtn,
  Hero_Wrapper,
  IMG_Block_Wrapper,
  IMG_Wrapper,
  IMG_Wrapper_Center,
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
        <IMG_Block_Wrapper>
          <IMG_Wrapper x="left" y="top">
            <About_us_Image src={Hero_img1} alt="Hero_img1" />
          </IMG_Wrapper>
          <IMG_Wrapper x="right" y="top">
            <About_us_Image src={Hero_img2} alt="Hero_img2" />
          </IMG_Wrapper>
          <IMG_Wrapper x="left" y="bottom">
            <About_us_Image src={Hero_img3} alt="Hero_img3" />
          </IMG_Wrapper>
          <IMG_Wrapper x="right" y="bottom">
            <About_us_Image src={Hero_img4} alt="Hero_img4" />
          </IMG_Wrapper>
          <IMG_Wrapper_Center>
            <About_us_Image src={Hero_img5} alt="Hero_img5" />
          </IMG_Wrapper_Center>
        </IMG_Block_Wrapper>
      </Container_Wrapper>
    </section>
  );
};
export default HeroSection;
