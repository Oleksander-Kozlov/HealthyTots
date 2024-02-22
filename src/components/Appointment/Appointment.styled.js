import { Link } from "react-router-dom";
import { styled } from "styled-components";

// export const Appointment_Container = styled.div`
// height: 300px;
// background-color: gray;
// margin: 0px 20px;
//  @media screen and (min-width: 1440px) {}
// `;

export const Appointment_section = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 0;
  padding-top: 0;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
  }
`;

export const Appointment_Container_Wrapper = styled.div`
  overflow: hidden;
`;
export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(140, 212, 250, 0.2);
  padding: 28px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    padding: 20px;
    border-radius: 44px;
    flex-direction: row;
    max-width: 688px;
    gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    border-radius: 60px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    gap: 126px;
  }
`;

export const AppointmentImg = styled.img`
  width: 304px;
  height: 342px;
  border-radius: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    width: 257px;
    height: 427px;

    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 406px;
    height: 559px;
    border-radius: 24px;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    gap: 28px;
    text-align: left;
  }
  /* align-items: flex-start; */
  @media screen and (min-width: 1440px) {
    width: 528px;
    gap: 48px;
  }
`;

export const H2_Appointment = styled.h2`
  align-self: stretch;
  color: #f27b57;
  text-align: center;
  font-family: Balsamiq Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: -8px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: -20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 28px;
    margin-bottom: -36px;
  }
`;

export const P_Appointment = styled.p`
  text-align: left;
  color: #0c151c;
  /* Text secondary */
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 36/18;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  /* color: black; */
  display: flex;
  /* width: 504px; */
  padding: 12px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #fff;
  border: 0;
  color: #94b0b7;
  /* Text secondary */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8/14;

  &::placeholder {
    color: #94b0b7;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21/18;
  }
`;
export const TextAreaBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 95px;
  }
  @media screen and (min-width: 1440px) {
    height: 114px;
  }
`;
export const InputMessage = styled(Input).attrs({ as: "input" })`
  height: 95px;
  /* text-align: right; */
  position: relative;
`;

export const TextAreaInput = styled(Input).attrs({ as: "textarea" })`
  height: 195px;
  /* text-align: right; */
  position: relative;
  ::placeholder {
    font-size: 0.8rem;
    transform: translateY(-0.5rem);
  }
`;

export const Placeholder_Container = styled.div`
  position: absolute;
  top: 12px; /* Зсуваємо від нижнього краю */
  left: 12px; /* Зсуваємо від правого краю */
  pointer-events: none; /* Щоб плейсхолдер не сприймав події */
  color: rgba(148, 176, 183, 0.5);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8/14;
  /* Інші властивості плейсхолдера */
`;
export const FieldCheckbox = styled.input`
  width: 28px;
  height: 28px;
  .span {
  }
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const TermsAndCondition = styled.div`
  text-align: left;
  /* margin-left: 12px; */
  margin-bottom: 20px;
  color: #0c151c;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const FormContainer2 = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    gap: 12px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    width: 432px;
    gap: 20px;
  }
`;
export const SubmitButton = styled.button`
  color: white;
  width: 100%;
  padding: 16px 32px;
  justify-content: center;
  text-align: center;
  align-items: center;

  border-radius: 20px;
  background: var(--Blue-accent, #0d3f7c);

  font-family: var(--font-title);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background: #318fb5;
  }
  &:active {
    background: #001244;
  }
  @media screen and (min-width: 768px) {
    width: 164px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    width: 198px;
  }
`;
export const ErrorMessage = styled.span`
  color: rgba(218, 20, 20, 1);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 10px;

  @media screen and (min-width: 1440px) {
    width: 268px;
  }
`;

export const Link_styled = styled(Link)`
font-family: Balsamiq Sans;
  font-size: 12px;
  text-align: center;
  color: #0d3f7c;
`
