import { styled } from "styled-components";
import ReactPaginate from "react-paginate";

export const BlogSection = styled.section`
  padding-top: 52px;
  padding-bottom: 28px;
  margin: 0;
`;

export const BlogContainer = styled.div`
  padding: 0 20px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 120px;
    /* padding-bottom: 32px; */
    overflow: hidden;
    max-width: 1440px;
  }
`;

export const BlogH2 = styled.h2`
  font-size: 24px;
  margin: 28px 0;
`;
export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 28px;
  padding: 8px 12px;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid var(--Blue-main, #8cd4fa);
  &:hover {
    background-color: #ebf5fa;
  }
  @media screen and (min-width: 1440px) {
    width: 282px;
  }
`;
export const InputBlogSearch = styled.input`
  height: 22px;
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
  &:hover {
    background-color: #ebf5fa;
  }
`;
export const BlogCardsContainer = styled.div`
  display: grid;
  gap: 28px;
  margin-bottom: 28px;
  /* margin-top: 32px; */
  @media screen and (min-width: 1440px) {
    gap: 32px;
    justify-items: center;
    grid-column-gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const NotFoundContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 1200px;
  height: 241px;
`;
export const NotFound = styled.p`
  color: var(--Grey-non-acttive, #94b0b7);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;

  gap: 16px;
  align-self: stretch;
  font-size: 18px;

  ul {
    list-style: none;
    display: flex;
    gap: 16px;
  }
  a {
    color: #318fb5;
  }
  li {
    cursor: pointer;
    color: #318fb5;
    font-size: 18px;
    font-weight: normal;
    &:hover {
      font-size: 18px;
      color: #0d3f7c;
    }
    &.selected a {
      color: #0d3f7c; /* Change to the desired active color */
    }
  }
`;
