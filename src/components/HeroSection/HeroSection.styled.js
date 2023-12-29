import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
export const Section = styled.section`
padding: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 40px;
    margin-top: 80px;

    display: flex;
    justify-content: center;
  }
`;

export const Hero_Container_Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    width: 768px;
    padding: 40px 120px;
    overflow: hidden;
  }
`;
export const Hero_Wrapper = styled.div`
  width: 590px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

export const H1 = styled.h1`
  margin-bottom: 48px;
  color: #000;
  text-align: left;

  color: #0d3f7c;
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
    /* Исходный размер */ 
  } 
  
  10%{ transform: rotate(90deg);
  }
 
  
  75%{transform: scale(2.2);   z-index: 100;
      
  }
  100% {
    transform: scale(2.2);  /* Возврат к исходному размеру */
  };
  `;
// Создание ключевых кадров для анимации
const zoomAnimation1 = keyframes`
  5% {
    transform: scale(0); /* Исходный размер */
  }
  
  50% {
    transform: scale(2.5); z-index: 100; 
  }
  100% {
    transform: scale(2.2);/* Возврат к исходному размеру */
  };
  `;

export const IMG_Wrapper_Center = styled.div`
  position: absolute;
  top: 26%;
  left: 26%;
  width: 280px;

  &:hover {
    z-index: 100;
    box-shadow: 0px 0px 16px 16px rgba(13, 63, 124, 0.25);
    border-radius: 20px;

    background-color: transparent;
    animation: ${zoomAnimation1} 2s 500ms both;
  }
`;

export const IMG_Wrapper = styled.div`
  width: 280px;
  height: 280px;
  position: relative;
  display: flex;
  justify-content: center;

  transform-origin: ${(props) => props.x} ${(props) => props.y};
  /* transition: transform 0.3s ease; */
  border-radius: 20px;

  box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25);

  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    z-index: 100;
    background-color: transparent;
    animation: ${zoomAnimation} 2s 500ms both;
    box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25);
  }
`;

export const About_us_Image = styled.img``;
