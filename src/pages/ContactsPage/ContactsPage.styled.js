import styled, { keyframes } from "styled-components";
import { shake } from "react-animations";

const bounceAnimation = keyframes`${shake}`;

export const ShakeDiv = styled.div`
  animation: 7s ${bounceAnimation} infinite;
`;
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import BGContactDesctop_1x from "../../assets/Unionbg@1x.png";
import BGContactDesctop_2x from "../../assets/Unionbg@2x.png";
export const MainContainer = styled.main`
position:relative;
overflow:hidden;
    
`;
export const RotatedBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 3555px;
  height: 1415.476px;
  background-image: url(${BGContactDesctop_1x});
  transform: rotate(-45deg);
  transform-origin: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.2;
  /* Для ретина-дисплеев с разрешением 2x и шириной больше 1440px */
  @media (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    (min-resolution: 192dpi) and (min-width: 1440px) {
    position: absolute;
    z-index: -1;
    width: 3555px;
    height: 1415.476px;
    background-image: url(${BGContactDesctop_2x});
    transform: rotate(-45deg);
    transform-origin: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2;
  }
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

export const SocialMediaLinkWrapper = styled.div`
display:flex;
gap:20px;
margin-bottom: 40px;`;

export const SocialMediaLink = styled.a`
  display: inline-flex;

  width: 40px;
  height: 40px;
 
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  font-size: 40px;
  fill: #bddfef;
  transition: fill 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    fill: #8cd4fa;
  }
  &:active {
    fill: #001244;
  }
`;

export const InstaIcon = styled(RiInstagramFill)`
  font-size: 40px;
  fill: #bddfef;
  transition: fill 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    fill: #8cd4fa;
    
  }
  &:active {
    fill: #001244;
  }
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

