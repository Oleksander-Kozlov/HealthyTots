import styled from "styled-components";
import BGContact from "../../assets/Union.png"
export const MainContainer = styled.main`
  background-image: url(${BGContact});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const H2 = styled.h2`
margin-bottom:48px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 126px;
  border-radius: 60px;
  overflow: hidden;
  border-radius: 60px;
  background: var(--white, #fff);
  box-shadow: 0px -4px 12px 4px rgba(13, 63, 124, 0.2),
    0px 4px 12px 0px rgba(13, 63, 124, 0.2);
  width: 1200px;
  margin-bottom: 48px;
`;
export const ContactsWrapper = styled.div`
  padding: 60px;
  text-align: left;
`;
export const MapWrapper = styled.div`
width: 588px;
height: 838px;
background-color: azure;

            
`

export const SocialMediaLinkWrapper = styled.div`display:flex;
gap:20px;
margin-bottom: 40px;`;
export const SocialMediaLink = styled.a`
  display: inline-flex;
  
  width: 40px;
  height: 40px;
`;

export const H3 = styled.h3`
  color: var(--Blue-accent, #0d3f7c);
  /* Tabs */
  font-family: Balsamiq Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
`;

export const Text = styled.p`
margin-bottom: 40px;
 
color: var(--Text-color, #0C151C);
/* Main text */
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 36px */
`;

