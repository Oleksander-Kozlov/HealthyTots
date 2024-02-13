import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const BlogCardContainer = styled(NavLink)`
  box-sizing: border-box;

  display: flex;

  justify-items: start;
  flex-direction: column;
  align-items: flex-start;

  width: 320px;
  padding: 24px 20px;
  border-radius: 20px;
  border: 1px solid var(--Blue-main, #8cd4fa);
  background: var(--background, #ebf5fa);
  text-align: left;
  cursor: pointer;
  &:hover {
    transition: transform 0.5s ease-in-out; /* Adjust the timing function (ease) as needed */
    transform: scale(1.03);
    box-shadow: 0px 4px 12px 4px rgba(13, 63, 124, 0.25);
  }

  @media screen and (max-width: 359.98px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    padding: 24px 20px 24px 20px;
    gap: 16px;
    width: 382px;
    height: 620px;
  }
`;
export const Image = styled.img`
  width: fit-content;
  height: 298px;
  border-radius: 8px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const BlogCard_h3 = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  flex-basis: 15%;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const ButtonRead = styled.button`
  width: 92px;
  height: 38px;
  background: var(--background, #ebf5fa);
  border-radius: 12px;
  border: 1px solid var(--Blue-accent, #0d3f7c);
  font-size: 18px;
  font-family: Balsamiq Sans;
  color: var(--Blue-accent, #0d3f7c);
  grid-row: 4;
  align-self: end;
 
`;
