import { styled } from "styled-components";

export const Appointment_Container = styled.div`
height: 300px;
background-color: gray;
margin: 0px 20px;

`

export const Block = styled.div`
    width: 960px;
    display: flex;
    justify-content: space-between;
border-radius: 60px;
background: rgba(140, 212, 250, 0.20);
padding: 60px;
gap: 126px;

`

export const AppointmentImg = styled.img`
width: 406px;
height: 559px;
border-radius: 24px;

`
export const FormContainer = styled.div`
width: 528px;
display: flex;
flex-direction: column;
gap:12px;
align-items: flex-start;
`

export const Input = styled.input`
/* color: black; */
display: flex;
/* width: 504px; */
padding: 20px 12px;
align-items: center;
gap: 10px;
border-radius: 12px;
background: #FFF;
border: 0;
color: var(--Grey-non-acttive, #94B0B7);
/* Text secondary */
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 120%;
&::placeholder {
    color: #94B0B7;
    font-style: italic;
  }
`;
export const InputMessage = styled(Input).attrs({ as: 'input' })`
  height: 95px;
`;




export const FormContainer2 = styled.div`
display: flex;
    flex-direction: column;
    width: 432px;
    gap: 20px;
`
export const SubmitButton = styled.button`
color: white;
display: flex;
padding: 16px 32px;
justify-content: center;
align-items: center;
margin-bottom: 10px;
border-radius: 20px;
background: var(--Blue-accent, #0D3F7C);

font-family: var(--font-title);
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;

&:hover{
    background: #318FB5;
  }
  &:active{
    background: #001244;
  }

`
export const ErrorMessage = styled.span`
  width: 268px;
  color: rgba(218, 20, 20, 1);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 10px;
`;
