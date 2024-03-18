import { ArrowLeft } from "../../assets/svg/SvgIcons.jsx";
import { ArrowRight } from "../../assets/svg/SvgIcons.jsx";

import "react-multi-carousel/lib/styles.css";

import avatar from "../../assets/img/feedbackAvatars/katerina.png";
import data from "../../assets/JSONs/feedback.json";
import {
  
  
  CustomArrowButton,
  FeedbackSection_Container, StyledCarousel,
//   StyledCarousel,
} from "./FeedbackSection.styled";
import FeedbackItem from "../FeedbackItem/FeedbackItem.jsx";


const FeedbackSection = ({}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, right }) => {
    return (
      <CustomArrowButton onClick={onClick} right={right} >
        <ArrowRight />
      </CustomArrowButton>
    );
  };
  const CustomLeftArrow = ({ onClick, left }) => {
    return (
      <CustomArrowButton onClick={onClick} left={left} >
        <ArrowLeft />
      </CustomArrowButton>
    );
  };

  return (
    <FeedbackSection_Container>
      <h2>Відгуки</h2>
      
      
                  <StyledCarousel
                       
          responsive={responsive}
          infinite={true}
          customRightArrow={<CustomRightArrow right="0px" />}
                  customLeftArrow={<CustomLeftArrow left="0px" />}
              >
                  {data.map((obj, index) => {
                     
            return (
                <FeedbackItem
                key={index}
                obj={obj}
                avatar={avatar}
                    // style={{ width: "20px" }}
                    
              />
            );
          })}
        </StyledCarousel>
        
    
    </FeedbackSection_Container>
  );
};

export default FeedbackSection;
