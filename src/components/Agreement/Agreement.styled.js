import { styled } from "styled-components";

export const AgreementContainer = styled.div`
margin-top: 50px; 
padding: 0 40px;

@media screen and (min-width: 1440px) {
  margin-top: 50px; 
    padding: 0 120px;
  }
`

export const AgreementTitle = styled.h2`
margin-bottom: 28px;
font-size: 24px;

@media screen and (min-width: 768px) {
  font-size: 28px;
}
@media screen and (min-width: 1440px) {
  font-size: 40px;
  margin-bottom: 48px;
}
`;

export const AgreementH3 = styled.h3`
  color: #0d3f7c;
  font-family: Balsamiq Sans;

  font-weight: 700;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin: 0;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
export const Text = styled.p`
  margin-bottom: 40px;

  color: #0c151c;

  font-family: Roboto;
  font-size: 14px;

  font-weight: 400;
  line-height: 150%; /* 36px */
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
    font-size: 24px;
  }
`;
export const TextContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`
;
