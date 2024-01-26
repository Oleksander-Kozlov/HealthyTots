import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
export const Section = styled.section`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 36px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    padding: 20px 0;
   
    margin: 24px 0;

    /* display: flex;
    justify-content: center; */
  }
`;

export const Hero_Container_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  padding-left: 20px;
  padding-right: 8px;
  width: 360px;

  @media screen and (max-width: 359.98px) {
    padding-left: 0;
    padding-right: 0;
    width: 100vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1339.98px) {
    padding: 0px 40px;
    flex-direction: row-reverse;
    width: 688px;
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
  /* width: 360px; */
  display: flex;
  flex-direction: column;
  align-items: left;

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
  @media screen and (max-width: 359.98px) {
    width: 100vw;
  }

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
    position: relative;
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
  left: 28%;
  width: 158px;
  box-shadow: 0px 0px 8px 8px rgba(13, 63, 124, 0.3);
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    /* z-index: 102; */
    box-shadow: 0px 0px 8px 8px rgba(13, 63, 124, 0.5);
    background-color: transparent;
  }

  @media screen and (max-width: 359.98px) {
    width: 150px;
    left: 29%;

    &:hover {
      scale: 2;
    }
  }

  @media screen and (min-width: 768px) {
    left: 30%;

    /* &:hover {
      scale: 2;
    } */
  }
  @media screen and (max-width: 1339.98px) {
    

    &:hover {
      scale: 2;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 280px;
    left: 26%;

    &:hover {
      animation: ${zoomAnimation1} 2s 500ms both;
     box-shadow: none;
    }
    
  }
`;

export const IMG_Wrapper = styled.div`
  position: relative;
  width: 158px;
  height: 158px;
  border-radius:45px;
  overflow: hidden;

  @media screen and (max-width: 359.98px) {
    width: 150px;
    height: 150px;
    &:hover,
    :focus {
      scale: 210%;
      z-index: 100;
      /* border-radius:0; */
    }
  }

  display: flex;
  justify-content: center;
  transform-origin: ${(props) => props.x} ${(props) => props.y};
  /* &:hover&${BackgroundBlur} {
    z-index: 101;
  } */
  &:hover,
  :focus {
    scale: 210%;
    z-index: 100;
    border-radius:20px;
  }
  @media screen and (max-width: 767.98px) {
    &:hover,
    :focus {
      /* scale: 2.1; */
    }
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 280px;
    border-radius: 20px;
    overflow: hidden;
    transform-origin: ${(props) => props.x} ${(props) => props.y};
    /* transition: transform 0.3s ease; */

    /* box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25); */

    background-size: cover;
    background-repeat: no-repeat;

    &:hover {
      ${BackgroundBlur} {
        backdrop-filter: blur(8px);
        width: 100vw;
        height: 100vh;
        border-radius: 20px;
      }
      z-index: 100;
      background-color: transparent;
      animation: ${zoomAnimation} 2s 500ms both;
      /* box-shadow: 0px 0px 12px 12px rgba(13, 63, 124, 0.25); */
      /* box-shadow: 0px 0px 8px 8px rgba(13, 63, 124, 0.5); */
    }
  }
`;

export const About_us_Image = styled.img``;
