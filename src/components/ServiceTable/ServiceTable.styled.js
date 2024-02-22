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

  border: 1.5px solid #bddfef;

  background: #fff;
  border-spacing: 0;
  border-collapse: separate;
  overflow: hidden;
  width: 320px;
  @media screen and (max-width: 359.98px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 688px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;

export const TableHeader = styled.tr`
  background: #bddfef;
  border-radius: 20px;
  border: 1px solid  #bddfef;
  color:  #0d3f7c;
  font-family: "Balsamiq Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TableColumn = styled.td`
  text-align: start;
  padding: 8px 16px;

  outline: 1px solid var(--Blue-secondary, #bddfef);
`;

export const TableTitle = styled.th`
  padding: 8px 16px;
`;

export const TableCell = styled.tr`
  text-align: start;
  padding: 8px 16px;
  border-radius: 20px;
`;
