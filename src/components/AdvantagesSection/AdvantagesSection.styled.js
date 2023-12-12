import styled from "styled-components";

export const Advantages_items = styled.div`
    display: grid;
    gap: 40px;
    justify-items: center;
    /* grid-template-rows:    repeat(4, 100px); */
grid-template-columns: repeat(3, 1fr);
/* background-color: #ce5151; */
margin-top: 60px;

`
export const Item = styled.div`
    /* background-color: #6a8f61; */
    /* width: 150px;
    height: 150px; */
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
`
export const Advantages_item_Img = styled.img`
width: 120px;
    height: 120px;
    /* border-radius: 16px; */
/* background: #D9D9D9; */
margin-bottom: 12px;
`