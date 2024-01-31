

// import Hero_img1 from "../../assets/rectangle/Rectangle3_1x.png";
// import Hero_img2 from "../../assets/rectangle/Rectangle1_1x.png";
// import Hero_img3 from "../../assets/rectangle/Rectangle2_1x.png";
// import Hero_img4 from "../../assets/rectangle/Rectangle4_1x.png";
// import Hero_img5 from "../../assets/rectangle/RectangleCenter_1x.png";

import hero_img_1_158 from "../../assets/rectangle/hero_img_1_158px@1x.png";
import hero_img_1_280 from "../../assets/rectangle/hero_img_1_280px@1x.png";
import hero_img_1_316 from "../../assets/rectangle/hero_img_1_316px@2x.png";
import hero_img_1_560 from "../../assets/rectangle/hero_img_1_560px@2x.png";
import hero_img_2_158 from "../../assets/rectangle/hero_img_2_158px@1x.png"; 
import hero_img_2_280 from "../../assets/rectangle/hero_img_2_280px@1x.png"; 
import hero_img_2_316 from "../../assets/rectangle/hero_img_2_316px@2x.png"; 
import hero_img_2_560 from "../../assets/rectangle/hero_img_2_560px@2x.png"; 
import hero_img_3_158 from "../../assets/rectangle/hero_img_3_158px@1x.png"; 
import hero_img_3_280 from "../../assets/rectangle/hero_img_3_280px@1x.png"; 
import hero_img_3_316 from "../../assets/rectangle/hero_img_3_316px@2x.png"; 
import hero_img_3_560 from "../../assets/rectangle/hero_img_3_560px@2x.png"; 
import hero_img_4_158 from "../../assets/rectangle/hero_img_4_158px@1x.png"; 
import hero_img_4_280 from "../../assets/rectangle/hero_img_4_280px@1x.png"; 
import hero_img_4_316 from "../../assets/rectangle/hero_img_4_316px@2x.png"; 
import hero_img_4_560 from "../../assets/rectangle/hero_img_4_560px@2x.png"; 
import hero_img_center_158 from "../../assets/rectangle/hero_img_center_158px@1x.png";
import hero_img_center_280 from "../../assets/rectangle/hero_img_center_280px@1x.png";
import hero_img_center_316 from "../../assets/rectangle/hero_img_center_316px@2x.png";
import hero_img_center_560 from "../../assets/rectangle/hero_img_center_560px@2x.png";



import MakeAppointmentButton from "../MakeAppointmentButton/MakeAppointmentButton";
import {

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
  

          <IMG_Wrapper x="left" y="top">
            
            <img
              srcSet={`${hero_img_1_158} 152w,    ${hero_img_1_316} 302w,   ${hero_img_1_280} 280w,   ${hero_img_1_560} 560w  `}
              sizes="(max-width: 1439.98px) 152px, 280px"
              src={hero_img_1_280}
              alt="Toys for child in clinic"
            />
          </IMG_Wrapper>
          <IMG_Wrapper x="right" y="top">
            
            <img
              srcSet={`${hero_img_2_158} 152w,    ${hero_img_2_316} 302w,   ${hero_img_2_280} 280w,   ${hero_img_2_560} 560w  `}
              sizes="(max-width: 1439px) 152px, 280px"
              src={hero_img_2_280}
              alt="Wallpaper"
            />
          </IMG_Wrapper>
          <IMG_Wrapper x="left" y="bottom">
            
            <img
              srcSet={`${hero_img_3_158} 152w,    ${hero_img_3_316} 302w,   ${hero_img_3_280} 280w,   ${hero_img_3_560} 560w  `}
              sizes="(max-width: 1439.98px) 152px, 280px"
              src={hero_img_3_280}
              alt="Сhanging table"
            />
          </IMG_Wrapper>
          <IMG_Wrapper x="right" y="bottom">
          
            <img
              srcSet={`${hero_img_4_158} 152w,    ${hero_img_4_316} 302w,   ${hero_img_4_280} 280w,   ${hero_img_4_560} 560w  `}
              sizes="(max-width: 1439.98px) 152px, 280px"
              src={hero_img_4_280}
              alt="Busy board"
            />
          </IMG_Wrapper>
          <IMG_Wrapper_Center>
            <img
              srcSet={`${hero_img_center_158} 152w,    ${hero_img_center_316} 302w,   ${hero_img_center_280} 280w,   ${hero_img_center_560} 560w  `}
              sizes="(max-width: 1439.98px) 152px, 280px"
              src={hero_img_center_280}
              alt="3 Doctors"
            />
          </IMG_Wrapper_Center>
        </IMG_Block_Wrapper>
        <H1andButton_Wrapper>
          <H1>
            Healthy Tots: де кожен<br></br> маленький пацієнт - великий
            пріоритет.
          </H1>
     
          <MakeAppointmentButton handleClick={handleClick}>
            Записатися на прийом
          </MakeAppointmentButton>
         
        </H1andButton_Wrapper>
      </Hero_Container_Wrapper>
    </Section>
  );
};
HeroSection.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default HeroSection;
