import styled from "styled-components";
export const About_Us_Section = styled.div`
  padding: 28px 0px;
`;
export const About_Us_Container_Wrapper = styled.div`
  padding: 0px 20px;
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 40px 120px;
    overflow: hidden;
  }
`;
export const H2_About_Us = styled.h2`
margin-bottom: 20px;
align-self: stretch;
color:  #F27B57;
text-align: center;
font-family: Balsamiq Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;

`;

export const About_us_foto_text = styled.div`
  
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    gap: 136px;
    margin-top: 60px;
  }
`;
export const About_us_Image = styled.div`
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
  @media screen and (min-width: 1440px) {
    width: 486px;
    height: 419px;
    background-color: gray;
    border-radius: 20px;
  }
`;
export const About_us_text = styled.p`
  text-align: left;
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
`;
