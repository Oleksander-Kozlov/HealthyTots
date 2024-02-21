/* eslint-disable react/prop-types */

import { CardContainer, DescriptionContainer, DocotorImg, Name, Text, Title } from "./DoctorCard.styled";
import doc_img1 from "../../assets/img/doctorImg/doctor1.png";
import doc_img2 from "../../assets/img/doctorImg/doctor2.png";
import doc_img3 from "../../assets/img/doctorImg/doctor3.png";
import doc_img4 from "../../assets/img/doctorImg/doctor4.png";
import doc_img5 from "../../assets/img/doctorImg/doctor5.png";




const DoctorCard = ({ data }) => {
  const docImgs = {
    1: doc_img1,
    2: doc_img2,
    3: doc_img3,
    4: doc_img4,
    5: doc_img5,
  };


  function getImageById(id) {
    return docImgs[id] 
  }

  return (
    <>
      <CardContainer>
        <DocotorImg src={getImageById(data.id)} alt="Doctors Foto" />
        <DescriptionContainer>
          <Name>{data.name}</Name>
          <Title>{data.title}</Title>
          <Text>{data.text}</Text>
        </DescriptionContainer>
      </CardContainer>
    </>
  );
};
  
  export default DoctorCard;