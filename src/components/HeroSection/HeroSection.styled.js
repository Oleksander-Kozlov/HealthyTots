import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";



export const Hero_Wrapper = styled.div`

width: 590px;

display: flex;flex-direction:column;
justify-content: center;
text-align:left;
`;

export const H1 = styled.h1`
  margin-bottom: 48px;
  color: #000;
  text-align: left;

  color:  #0d3f7c;
  /* Header1 */
  font-family: Balsamiq Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const pulseAnimation = keyframes`${pulse}`;

export const BouncyDiv = styled.div`

  animation: 1s ${pulseAnimation} infinite;
`;
export const HeroBtn = styled.button`
  width: 260px;
  border-radius: 20px;
  background: #0d3f7c;
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 16px 32px;
  
`;

export const IMG_Block_Wrapper = styled.div`
  position: relative;

  width: 584px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  
`;
// Создание ключевых кадров для анимации
const zoomAnimation = keyframes`
  0% {
    transform: scale(1); /* Исходный размер */
  }
  50% {
    transform: scale(2.2); /* Увеличение в 2 раза */
  }
  100% {
    transform: scale(1); z-index:-1;/* Возврат к исходному размеру */
  };
  `
  // Создание ключевых кадров для анимации
const zoomAnimation1 = keyframes`
  0% {
    transform: scale(1); /* Исходный размер */
  }
  50% {
    transform: scale(2.5); /* Увеличение в 2 раза */
  }
  100% {
    transform: scale(1);/* Возврат к исходному размеру */
  };
  `

export const IMG_Wrapper_Center = styled.div`
  position: absolute;
  top: 24%;
  left: 24%;
  width: 280px;

  &:hover {
    /* transform: scale(2); */
    z-index: 100;
    box-shadow: 0px 0px 16px 16px rgba(13, 63, 124, 0.25);
    border-radius: 20px;

    background-color: transparent;
    animation: ${zoomAnimation1} 1s both;
  }
`;


export const IMG_Wrapper = styled.div`
  position: relative;

  background-size: cover;
  background-repeat: no-repeat;

  transform-origin: ${(props) => props.x} ${(props) => props.y};
  transition: transform 0.3s ease;
  border-radius: 20px;
  background: rgba(13, 63, 124, 0.25),
    lightgray -51.244px 1.039px / 177.778% 100% no-repeat;
  box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25);

  &:hover {
    transform: scale(2);
    z-index: 100;
    background-color: transparent;
    animation: ${zoomAnimation} 1s both;
  }
`;

export const About_us_Image = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 20px;
 
`;
