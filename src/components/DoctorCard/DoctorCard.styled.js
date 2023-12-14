import { styled } from "styled-components";

export const CardContainer = styled.div`
display: flex;
width: 1152px;
height: 373px;
padding: 24px;
gap: 40px;
border-radius: 24px;
border: 1px solid var(--Blue-main, #8CD4FA);
background: #EBF5FA;
align-self: stretch;

`
export const DocotorImg = styled.img`
width: 287px;
height: 373px;
border-radius: 24px;
background: #D9D9D9;
`
export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 32px;
`

export const Name = styled.h3`
font-size: 24px;
/* color: var(--Blue-accent, #0D3F7C); */
`
export const Title = styled.p`
color: var(--Blue-hover, #318FB5);

font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 150%;
`
export const Text = styled.p`
color: var(--Text-color, #0C151C);
/* Main text */
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 150%;
text-align: start;
`