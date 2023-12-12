import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  gap: 128px;
  align-items: center;
  
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

color: var(--Text-color, #0C151C);
font-family: Balsamiq Sans;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const BackHomeLink = styled(Link)`
width: 341px;
  border-radius: 20px;
  background: #0d3f7c;
  color: #fff;
  font-family: Balsamiq Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 16px 32px;
`;
