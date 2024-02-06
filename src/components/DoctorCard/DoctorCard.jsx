/* eslint-disable react/prop-types */

import { CardContainer, DescriptionContainer, DocotorImg, Name, Text, Title } from "./DoctorCard.styled";




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