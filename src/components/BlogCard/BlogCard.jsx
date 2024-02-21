/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";
import image from "../../assets/img/blogCardsImg/blogCard.jpeg";
import {
  BlogCardContainer,
  Image,
  ButtonRead,
  BlogCard_h3,
} from "./BlogCard.styled";

const BlogCard = ({ data }) => {
  return (
    <BlogCardContainer to={`${data.id}`}>
      
      <Image src={image} alt={data.title} />
      <BlogCard_h3 >{data.title}</BlogCard_h3>
      <p style={{flexBasis: "20%"}}>{data.text}</p>
      
      <ButtonRead>Читати</ButtonRead>
      
    </BlogCardContainer>
  );
};

export default BlogCard;
