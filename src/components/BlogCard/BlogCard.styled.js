import { styled } from "styled-components";

export const BlogCardContainer = styled.div`

display: flex;
padding: 24px 20px 24px 20px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
width: 382px;
height: 620px;
border-radius: 20px;
border: 1px solid var(--Blue-main, #8CD4FA);
background: var(--background, #EBF5FA);
text-align: left;
cursor: pointer;
&:hover{
    
    transition: transform 0.5s ease-in-out; /* Adjust the timing function (ease) as needed */
    transform: scale(1.03);
    box-shadow: 0px 4px 12px 4px rgba(13, 63, 124, 0.25);
}
`
export const Image = styled.img`
height: 298px;
border-radius: 8px;
`
export const ButtonRead = styled.button`
width: 92px;
height: 38px;
background: var(--background, #EBF5FA);
border-radius: 12px;
border: 1px solid var(--Blue-accent, #0D3F7C);
font-size: 18px;
font-family: Balsamiq Sans;
color: var(--Blue-accent, #0D3F7C);
align-self: end;

`