/* eslint-disable react/prop-types */

import { CardContainer, DescriptionContainer, DocotorImg, Name, Text, Title } from "./DoctorCard.styled";




const DoctorCard = ({ data }) => {
  const docImgs = {
    1: doc_img1,
    2: doc_img2,
    3: doc_img3,
    4: doc_img4,
    5: doc_img5,
  };
  function getImageById(id) {
    return docImgs[id] || null;
  }

  return ( <CardContainer>
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