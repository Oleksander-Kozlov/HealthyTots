import { styled } from "styled-components";

export const ServicesContainer = styled.div`
  padding: 52px 20px 28px 20px;
  overflow: hidden;
  display: flex;
  gap: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Table = styled.table`
  border-radius: 20px;
  /* border: 1px solid var(--Blue-secondary, #BDDFEF); */
background: #FFF;
border-spacing: 0;
 border-collapse: separate;
 overflow: hidden;
 /* .rounded-corners {
 border-spacing: 0;
 border-collapse: separate;
 border-radius: 10px;
 border: 1px solid black;
 box-shadow: 1 0 0 2px var(--inner-border-color, black);
} */
&:last-child {
    border-radius: 20px;
  }
`

export const TableHeader = styled.tr`
background: var(--Blue-secondary, #BDDFEF);
border-radius: 20px;
    border: 1px solid var(--Blue-secondary, #BDDFEF);
    
`

export const TableColumn = styled.td`
  /* border: 1px solid var(--Blue-secondary, #BDDFEF); */
  text-align: start;
  padding: 7px 16px;
  /* &:last-child {
    border-radius: 20px;
  } */
`;