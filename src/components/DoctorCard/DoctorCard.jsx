/* eslint-disable react/prop-types */

import { CardContainer, DescriptionContainer, DocotorImg, Name, Text, Title } from "./DoctorCard.styled";
import doc_img1 from "../../assets/doctorImg/doctor1.png";
import doc_img2 from "../../assets/doctorImg/doctor2.png";
import doc_img3 from "../../assets/doctorImg/doctor3.png";
import doc_img4 from "../../assets/doctorImg/doctor4.png";
import doc_img5 from "../../assets/doctorImg/doctor5.png";


// eslint-disable-next-line react/prop-types
const DoctorCard = ({ data }) => {


  return (
    <CardContainer>
      <DocotorImg src={data.image} alt="Doctors Foto" />
      <DescriptionContainer>
        <Name>{data.name}</Name>
        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
      </DescriptionContainer>
    </CardContainer>
  );
};
  
  export default DoctorCard;