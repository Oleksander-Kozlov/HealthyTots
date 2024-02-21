import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import BGContactDesctop_1x from "../../assets/img/backgroundImg/Unionbg@1x.png";
import BGContactDesctop_2x from "../../assets/img/backgroundImg/Unionbg@2x.png";
export const MainContainer = styled.main`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    padding: 28px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 120px;
 ;
  }
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
export const LinkContainerContactPage = styled.div`
  display: flex;
  align-self: start;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
   
    margin-bottom: 48px;
  }
`;

export const NavLinks = styled(Link)`
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
  + p {
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
`;

export const CotactTitle = styled.h2`
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  overflow: hidden;
  border-radius: 32px;
  background: var(--white, #fff);
  box-shadow: 0px -4px 12px 4px rgba(13, 63, 124, 0.2),
    0px 4px 12px 0px rgba(13, 63, 124, 0.2);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    flex-direction: row;
    align-items: stretch;
  }
  @media screen and (min-width: 1440px) {
    gap: 126px;
    flex-direction: row;
    align-items: stretch;

    border-radius: 60px;
  }
`;
export const ContactsDiv = styled.div`
  padding: 24px 32px;
  text-align: left;
  @media screen and (min-width: 768px) {
    padding: 24px 16px 24px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 60px;
  }
`;
export const MapWrapper = styled.div`
  width: 588px;
  height: 838px;
  background-color: azure;
`;

export const SocialMediaLinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

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

export const ContactH3 = styled.h3`
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

export const LinkToForm = styled(Link)`
  display: flex;
  justify-content: center;
  width: fit-content;
  padding: 16px 32px;
  border-radius: 20px;
  background: #0d3f7c;
  color: #fff;

  font-family: Balsamiq Sans;
  font-size: 18px;

  font-weight: 700;

  &:hover {
    background: #318fb5;
    /* hover */
    box-shadow: 0px 4px 12px 4px rgba(13, 63, 124, 0.25);
  }
  &:active {
    background: rgba(0, 18, 68, 1);
  }
  @media screen and (max-width: 360px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    padding: 16px 32px;
  }
`;
