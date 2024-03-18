import styled from "styled-components";
import Carousel from 'react-multi-carousel';
// import { ReactComponent as Star } from "../../assets/svg/feedbackStar.svg"

export const FeedbackSection_Container = styled.div`
  padding: 0 20px;
  /* display: flex;
    flex-direction: column;
    align-items: center; */
`;


export const CustomArrowButton = styled.div`
 width: 48px;
  height: 48px;
  background-color: #bddfef;
  position: absolute;
  border-radius: 50%;
  
  transform: translateY(-50%);
  cursor: pointer;
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
`
// export const RightArrow = styled.div`
//  width: 48px;
//   height: 48px;
//   background-color: #bddfef;
//   position: absolute;
//   left: 400px;
//   border-radius: 50%;
  
//   transform: translateY(-50%);
//   cursor: pointer;
// `

export const CenteredCarouselContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CarouselWrapper = styled.div`
  width: 80%; /* Adjust the width as needed */
`;

export const StyledCarousel = styled(Carousel)`
/* position: relative; */

.custom-left-arrow, .custom-right-arrow {
  position: absolute;
  /* top: 50%; */
  transform: translateY(-50%);
  background-color: #BDDFEF;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
}

.custom-left-arrow {
  left: 20px;
}

.custom-right-arrow {
  right: 20px;
}
`