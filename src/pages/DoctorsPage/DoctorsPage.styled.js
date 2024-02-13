import { styled } from "styled-components";

export const DoctorSection = styled.main`
  padding-top: 52px;

  margin: 0;
  @media screen and (min-width: 768px) {
    padding-top: 28px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 48px;
  }
`;

export const DoctorsContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 28px;
  @media screen and (max-width: 359.98px) {
    padding: 0 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;

    padding: 0 120px;

    overflow: hidden;
  }
`;
export const DoctorsH2 = styled.h2`
  font-size: 24px;
  margin: 28px 0;
  @media screen and (min-width: 1440px) {
    margin: 48px 0;
  }
`;
export const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;
