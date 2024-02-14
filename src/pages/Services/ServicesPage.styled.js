import styled from "styled-components";

export const ServicesSection = styled.section`
  padding-top: 52px;
  padding-bottom: 28px;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 28px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 24px;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;

  justify-items: center;
  flex-direction: column;
  gap: 28px;
  padding: 0 20px;
  overflow: hidden;
  @media screen and (max-width: 359.98px) {
    padding: 5px;
  }
`;

export const ServiceH2 = styled.h2`
  font-size: 24px;

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;

export const CardsWraper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  grid-row-gap: 28px;
  @media screen and (max-width: 359.98px) {
    gap: 5px;
  }
  @media screen and (min-width: 768px) {
    grid-column-gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    grid-row-gap: 60px;
    grid-column-gap: 140px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  width: 124px;
  height: 180px;
  padding: 12px;

  border-radius: 24px;
  border: 1px solid var(--Blue-main, #8cd4fa);
  background: #ebf5fa;

  @media screen and (min-width: 768px) {
    width: 284px;
    height: 398px;
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 332px;
    height: 438px;
    padding: 24px;
  }
`;

export const IMG_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 136px;

  @media screen and (max-width: 359.98px) {
    width: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 284px;
    height: 341px;
  }
  @media screen and (min-width: 1440px) {
    width: 341px;
  }
`;
