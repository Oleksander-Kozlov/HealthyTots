import Hero_img2 from "../../assets/rectangle/Rectangle1_1x.png";
import Hero_img3 from "../../assets/rectangle/Rectangle2_1x.png";
import Hero_img1 from "../../assets/rectangle/Rectangle3_1x.png";
import Hero_img4 from "../../assets/rectangle/Rectangle4_1x.png";
import Hero_img5 from "../../assets/rectangle/RectangleCenter_1x.png";

import MakeAppointmentButton from "../MakeAppointmentButton/MakeAppointmentButton";
import {
  About_us_Image,
  BackgroundBlur,
  // BouncyDiv,
  H1,
  H1andButton_Wrapper,
  Hero_Container_Wrapper,
  
  IMG_Block_Wrapper,
  IMG_Wrapper,
  IMG_Wrapper_Center,
  Section,
} from "./HeroSection.styled";
import PropTypes from "prop-types";

const HeroSection = ({ handleClick }) => {
  return (
    <Section>
      <Hero_Container_Wrapper>
        <IMG_Block_Wrapper>
          <BackgroundBlur></BackgroundBlur>
          {/* <img
                  srcset="./images\portfolio\img1_356.jpg 356w,
                ./images\portfolio\img1_360.jpg 360w,
                ./images\portfolio\img1_396.jpg 396w,
                ./images\portfolio\img1_712.jpg 712w,
                ./images\portfolio\img1_720.jpg 720w,
                ./images\portfolio\img1_792.jpg 792w
                "
                sizes="(min-width: 1200px) 360px, (min-width: 768px) 356px, (min-width: 480px) 396px, 100vw"
                 
                  src="./images\portfolio\img1_396.jpg"
                  alt="exemple app"
                  width="396"
                  height="280"/> */}

          <IMG_Wrapper x="left" y="top">
            {/* <About_us_Image src={Hero_img1} alt="Hero_img1" /> */}
            <img
              srcSet={`${Hero_img3} 152w,    ${Hero_img4} 302w,   ${Hero_img1} 280w,   ${Hero_img2} 560w  `}
              sizes="(max-width: 1439.98px) 152px, 280px"
              src={Hero_img5}
              alt="Toys for child in clinic"
            />
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
            <About_us_Image src={Hero_img5} alt="Hero_img_center" />
          </IMG_Wrapper_Center>
        </IMG_Block_Wrapper>
        <H1andButton_Wrapper>
          <H1>
            Healthy Tots: де кожен<br></br> маленький пацієнт - великий
            пріоритет.
          </H1>
          {/* <BouncyDiv> */}
          <MakeAppointmentButton handleClick={handleClick}>
            Записатися на прийом
          </MakeAppointmentButton>
          {/* </BouncyDiv> */}
        </H1andButton_Wrapper>
      </Hero_Container_Wrapper>
    </Section>
  );
};
HeroSection.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default HeroSection;
