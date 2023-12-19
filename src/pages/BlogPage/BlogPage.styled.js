import { styled } from "styled-components";
import ReactPaginate from "react-paginate";

export const BlogContainer = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
  padding: 0 120px;
  /* padding-bottom: 32px; */
  overflow: hidden;
  max-width: 1440px;
  
`;
export const SearchContainer = styled.div`
  display: flex;
  width: 282px;
  padding: 8px 12px;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  border: 1px solid var(--Blue-main, #8cd4fa);
  &:hover{
    background-color: #EBF5FA;
  }
`;
export const InputBlogSearch = styled.input`
  height: 22px;
  width: 100%;
  font-size: 18px;
  border: none;
  outline: none;
  &:hover{
    background-color: #EBF5FA;
  }
`;
export const BlogCardsContainer = styled.div`
  display: grid;
  gap: 32px;
  justify-items: center;
  grid-column-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  /* margin-top: 32px; */
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
      color: #0D3F7C;
      
    }  
    &.selected a{
      
      color: #0D3F7C; /* Change to the desired active color */
    }
    
  }

 
`;
