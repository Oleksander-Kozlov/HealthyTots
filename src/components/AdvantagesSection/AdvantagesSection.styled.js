import styled from "styled-components";
export const Advantages_section = styled.div`
  
  margin-bottom: 0;
 
`;

export const Advantages_Container_Wrapper = styled.div`
  padding: 28px 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 40px 120px;
    overflow: hidden;
  }
`;
export const Advantages_items = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  /* grid-template-rows:    repeat(4, 100px); */
  grid-template-columns: repeat(2, 1fr);
  /* background-color: #ce5151; */
  margin-top: 60px;
  @media screen and (min-width: 1440px) {
    display: grid;
    gap: 40px;
    justify-items: center;
    /* grid-template-rows:    repeat(4, 100px); */
    grid-template-columns: repeat(3, 1fr);
    /* background-color: #ce5151; */
    margin-top: 60px;
  }
`;
export const Item = styled.div`
    /* background-color: #6a8f61; */
    /* width: 150px;
    height: 150px; */
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
`
export const H3 = styled.h3`
  color: #0d3f7c;
  font-family: Balsamiq Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Advantages_item_Img = styled.img`
width: 120px;
    height: 120px;
    /* border-radius: 16px; */
/* background: #D9D9D9; */
margin-bottom: 12px;
`

export const TextContainer = styled.p`
  color: #0c151c;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4/12;
  @media screen and (min-width:768px) {
   
    font-size: 14px;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    max-width: 380px;
    font-size: 18px;
  }
`;