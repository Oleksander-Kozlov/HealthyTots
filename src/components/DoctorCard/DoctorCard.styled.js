import { styled } from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 320px;
  padding: 16px;
  border-radius: 24px;
  border: 1px solid #8cd4fa;
  background: #ebf5fa;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 688px;
    gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 24px;

    width: 1200px;

    padding: 24px;
    gap: 40px;
    border-radius: 24px;
    border: 1px solid var(--Blue-main, #8cd4fa);
    background: #ebf5fa;
    align-self: stretch;
  }
`;
export const DocotorImg = styled.img`
  /* width: 100%; */
  /* height: 373px; */
  border-radius: 24px;
  background: #d9d9d9;
`;
export const DescriptionContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Name = styled.h3`
  text-align: left;
  font-size: 16px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const Title = styled.p`
  color: var(--Blue-hover, #318fb5);
  text-align: left;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
export const Text = styled.p`
  color: #0c151c;

  font-family: Roboto;
  font-size: 14px;

  font-weight: 400;
  line-height: 150%;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
