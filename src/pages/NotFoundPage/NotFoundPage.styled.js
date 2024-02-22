import { styled } from "styled-components";
import { Link } from "react-router-dom";
import NotFoundSvg from "../../assets/img/notFound/pngNotFound_320px@1x.png";
export const NotFoundSection = styled.section`
  padding-top: 52px;
  padding-bottom: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 48px;
    width: 1440px;
  }
`;

export const Container = styled.div`
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 359.98px) {
    padding: 0 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 120px;
    gap: 128px;

    overflow: hidden;
  }
`;
export const NotFoundH2 = styled.h2`
  font-size: 40px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

export const NotFound_p = styled.p`
  text-align: left;
  color: #0c151c;
  font-family: "Balsamiq Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
export const Background = styled.div`
  background-image: url(${NotFoundSvg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 320px;
  height: 620px;
`;
export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  color: var(--Text-color, #0c151c);
  font-family: Balsamiq Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (min-width: 768px) {
    width: 344px;
  }
  @media screen and (min-width: 1440px) {
    width: 485px;
  }
`;

export const BackHomeLink = styled(Link)`
  width: 100%;
  border-radius: 20px;
  background: #0d3f7c;
  color: #fff;
  font-family: Balsamiq Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 16px 32px;

  @media screen and (min-width: 768px) {
    width: 341px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;
