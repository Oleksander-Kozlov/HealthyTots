import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
export const Section = styled.section`
position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 36px;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 40px;
    margin-top: 80px;

    display: flex;
    justify-content: center;
  }
`;

export const Hero_Container_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  padding-left: 20px;
  padding-right: 20px;
  width: 360px;
  @media screen and (min-width: 768px) and (max-width: 1339.98px) {
    padding-left: 40px;
    padding-right: 40px;
    flex-direction: row-reverse;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 24px;
    width: 1200px;
    /* padding: 40px 120px; */
    overflow: hidden;
  }
`;
export const H1andButton_Wrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 590px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
  }
`;

export const H1 = styled.h1`
  width: 310px;
  color: #0d3f7c;
  text-align: left;
  font-family: Balsamiq Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 28px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
    width: auto;

    text-align: left;

    /* Header1 */

    font-size: 48px;
  }
`;
const pulseAnimation = keyframes`${pulse}`;

export const BouncyDiv = styled.div`
  animation: 1s ${pulseAnimation} infinite;
`;
export const HeroBtn = styled.button`
  color: #fff;
  font-family: Balsamiq Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 1440px) {
    width: 260px;
    border-radius: 20px;
    background: #0d3f7c;
    color: #fff;

    font-size: 24px;

    font-weight: 700;

    padding: 16px 32px;
  }
`;

export const IMG_Block_Wrapper = styled.div`
  position: relative;
  /* width: 332px; */

  display: flex;

  justify-content: center;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;

  @media screen and (min-width: 1440px) {
    width: 590px;
    gap: 28px;
   
  }
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
export const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(200, 212, 181, 0.8); */
  backdrop-filter: blur(8px); /* початкове значення - без розмиття */
  z-index: -1; /* фон повинен бути за зображенням */
  transition: backdrop-filter 0.3s ease; /* для плавного змінювання ефекту розмиття */
`;
export const IMG_Wrapper_Center = styled.div`
  position: absolute;
  top: 26%;
  left: 26%;
  width: 158px;
  @media screen and (max-width: 359.98px) {
    width: 150px;
  }
  &:hover ${BackgroundBlur} {
    /* backdrop-filter: blur(8px); */
    z-index: 101;
  }
  &:hover {
    z-index: 102;
    box-shadow: 0px 0px 8px 8px rgba(13, 63, 124, 0.25);
    border-radius: 20px;

    background-color: transparent;
    scale: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 280px;
    &:hover {
      animation: ${zoomAnimation1} 2s 500ms both;
    }
  }
`;

export const IMG_Wrapper = styled.div`
  position: relative;
  width: 158px;
  height: 158px;
  @media screen and (max-width: 359.98px) {
    width: 150px;
  }

  display: flex;
  justify-content: center;
  transform-origin: ${(props) => props.x} ${(props) => props.y};
  &:hover&${BackgroundBlur} {
    z-index: 101;
  }
  &:hover,
  :focus {
    z-index: 100;
    background-color: transparent;
    scale: 2.1;

    box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25);
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 280px;

    transform-origin: ${(props) => props.x} ${(props) => props.y};
    /* transition: transform 0.3s ease; */
    border-radius: 20px;

    box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25);

    background-size: cover;
    background-repeat: no-repeat;

    &:hover {
      ${BackgroundBlur} {
        backdrop-filter: blur(8px);
        width: 100vw;
        height: 100vh;
      }
      z-index: 100;
      background-color: transparent;
      animation: ${zoomAnimation} 2s 500ms both;
      box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25);
    }
  }
`;

export const About_us_Image = styled.img``;
