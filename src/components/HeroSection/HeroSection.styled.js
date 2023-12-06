import styled, { keyframes } from "styled-components";

import Hero_img5 from "../../assets/img55.png";

export const Hero_Wrapper = styled.div`
display: flex;flex-direction:column;
justify-content: center;
 text-align:left;
`;

export const H1 = styled.h1`

margin-bottom: 48px;
color: #000;
text-align: left;

font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;`
export const HeroBtn = styled.button`
  border-radius: 20px;
  background: #515151;

  color: #fff;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
padding: 16px 32px`;

export const IMG_Block_Wrapper = styled.div`
  position: relative;

  width: 584px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  /* background-color: gray; */
  border-radius: 20px;
`;

export const IMG_Wrapper_Center = styled.div`
  position: absolute;
  top: 24%;
  left: 24%;
  width: 280px;
  /* z-index: 199; */

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    background-image: url(${Hero_img5});
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 20px;

    opacity: 0; /* Начальная прозрачность */
    transition: opacity 0.3s ease; /* Плавное появление */
  }
  &:hover::before {
    opacity: 1;
    width: 584px;
    height: 584px;
    z-index: 100;
    
  }
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
    transform: scale(1); /* Возврат к исходному размеру */
  }
`;
export const IMG_Wrapper = styled.div`
  position: relative;

  background-size: cover;
  background-repeat: no-repeat;

  transform-origin: ${(props) => props.x} ${(props) => props.y};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(2);
    z-index: 100;
    background-color: transparent;
    animation: ${zoomAnimation} 0.8s forwards;
  }
`;

export const About_us_Image = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 20px;
`;