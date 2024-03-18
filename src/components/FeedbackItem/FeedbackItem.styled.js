import styled from "styled-components";


export const FeedbackContainer = styled.div`
  display: flex;
  width: 256px;
  height: 209px;
  padding: 16px;
  margin-bottom: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  flex: 1 0 0;
  border-radius: 20px;
  border: 1px solid var(--Blue-hover, #318fb5);
  background: #fff;

  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 266px;
  height: 264px;
  }

  @media screen and (min-width: 1440px) {
    width: 320px;
  height: 319px;
  }
`;

export const PersonContainer = styled.div`
display: flex;
align-items: center;
gap:20px;
@media screen and (min-width: 1440px) {
  gap:29px;
  }
`
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  
  overflow: hidden; /* Hide any overflow beyond the circular shape */
  object-fit: cover; /* Ensure the image covers the entire circular area */
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1440px) {
    width: 100px;
    height: 100px;
  }
`;
export const PersonInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap:8px;
@media screen and (min-width: 768px) {
font-size: 12px;
  }

`
export const Name = styled.p`
  color: var(--Blue-accent, #0d3f7c);
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StarsContainer = styled.div`
display: flex;


`
export const Duration = styled.p`
color: var(--Grey-non-acttive, #94B0B7);
text-align: center;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media screen and (min-width: 768px) {
font-size: 18px;
  }


`



export const FeedbackText = styled.p`
color: var(--Text-color, #0C151C);
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 120%;
align-self: stretch;
text-align: left;

@media screen and (min-width: 768px) {
font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
font-size: 18px;
  }

`
