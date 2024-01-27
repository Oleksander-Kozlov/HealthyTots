import { styled } from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupInnerContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: fit-content;
  height: fit-content;
  margin: auto;

  border-radius: 60px;
  z-index: 1;
  background: #ebf5fa;
  padding: 40px;

  @media screen and (min-width: 768px) {
    width: 587px;
    height: 297px;
  }
`;
export const IconOkey = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background: linear-gradient(to bottom right, #4FC646, #3FB06B);
display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 4px 8px rgba(1, 0, 0, 0.3);
`