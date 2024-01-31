import styled from "styled-components";
export const About_Us_Section = styled.section`
  padding: 28px 0px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }
`;
export const About_Us_Container_Wrapper = styled.div`
  padding: 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
  @media screen and (min-width: 1440px) {
    /* width: 1440px; */
    padding: 40px 120px;
    overflow: hidden;
  }
`;
export const H2_About_Us = styled.h2`
  margin-bottom: 20px;
  align-self: stretch;
  color: #f27b57;
  text-align: center;
  font-family: Balsamiq Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (min-width: 768px) {
   margin-bottom: 40px;
  }
`;

export const About_us_foto_text = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    gap: 126px;
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 136px;
    margin-top: 60px; */
  }
`;
export const About_us_Image = styled.img`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;

  width: 320px;
  height: 284px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 334px;
    height: 312px;
  }
  @media screen and (min-width: 1440px) {
    width: 486px;
    height: 419px;
    background-color: gray;
    border-radius: 20px;
  }
`;
export const About_us_text = styled.p`
  text-align: left;
  max-width: 320px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 334px;
  }
  @media screen and (min-width: 1440px) {
  
    font-size: 24px;

    line-height: 36/24;

    text-align: left;
    max-width: 588px;
  }
`;
