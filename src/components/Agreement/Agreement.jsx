import { AgreementContainer, AgreementH3, Text, TextContainer } from "./Agreement.styled";
import item from "../../assets/JSONs/documents.json";
import { useParams } from "react-router";
import { LinkContainerContactPage, NavLinks } from "../../pages/ContactsPage/ContactsPage.styled";
import LinkContainer from "../LinkContainer/LinkContainer";

const Agreement = () => {
  const { id } = useParams();
  console.log("item[id].title.title", item[id].title)
  // console.log("item[id]", item[id])
  window.scrollTo(0, 0)
  return (
    < AgreementContainer >
      
      {/* <LinkContainer title={item[id].title} /> */}


            <LinkContainerContactPage >
        <NavLinks to="/">
          <p style={{color:"#94b0b7"}}> Головна /</p>
        </NavLinks>
        <p >&nbsp;{item[id].title}</p>
      </LinkContainerContactPage>
      <div style={{ marginTop: "50px" }} key={item[id].id}>
        {/* <AgreementTitle>{item[id].title}</AgreementTitle> */}
        {item[id].steps.map((step, index) => (
          <TextContainer key={index}>
            <AgreementH3>{step.H3}</AgreementH3>
            <Text>{step.text}</Text>
          </TextContainer>
        ))}
      </div>
    </AgreementContainer>
  );
};

export default Agreement;
