import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
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
  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
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
  padding-left: 10px;

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
  @media screen and (max-width: 767.98px) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    /* width: 590px; */
    gap: 28px;
  }
`;
// Создание ключевых кадров для анимации

const zoomAnimation = keyframes`
  0% {
    opacity:0.5;/* Исходный размер */ 
    
  } 
  
  10%{   opacity:1;}
 
 
  
  50%{transform: scale(2.13);   z-index: 100; }
  

  
      
  
  100% {
    z-index:0;  /* Возврат к исходному размеру */
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
    transform: scale(2);/* Возврат к исходному размеру */
  };
  `;

export const IMG_Wrapper_Center = styled.div`
  position: absolute;
  top: 26%;
  left: 27%;
  width: 158px;
  box-shadow: 0px 0px 8px 8px rgba(13, 63, 124, 0.3);
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    animation: ${zoomAnimation1} 2s 500ms both;
    box-shadow: 0px 0px 8px 8px rgba(13, 63, 124, 0.5);
    background-color: transparent;
  }

  @media screen and (max-width: 359.98px) {
    width: 150px;
    left: 26.5%;

    &:hover {
    }
  }

  @media screen and (min-width: 768px) {
    left: 28.5%;
  }

  @media screen and (min-width: 1440px) {
    width: 280px;
    left: 32%;

    &:hover {
    }
  }
`;

export const IMG_Wrapper = styled.div`
  position: relative;
  width: 158px;
  height: 158px;
  border-radius: 45px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transform-origin: ${(props) => props.x} ${(props) => props.y};

  &:hover,
  :focus {
    z-index: 100;
    border-radius: 20px;
    animation: ${zoomAnimation} 2s 500ms both;
  }

  @media screen and (max-width: 359.98px) {
    width: 150px;
    height: 150px;
    /* &:hover,
    :focus {
      scale: 210%;
      z-index: 100;
      animation: none;
    } */
  }

  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 280px;
    border-radius: 20px;
    overflow: hidden;
    transform-origin: ${(props) => props.x} ${(props) => props.y};

    background-size: cover;
    background-repeat: no-repeat;
  }
`;
