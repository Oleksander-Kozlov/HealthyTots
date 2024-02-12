/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";
import image from "../../assets/BlogCards/BlogCard.jpeg";
import {
  BlogCardContainer,
  Image,
  ButtonRead,
  BlogCard_h3,
} from "./BlogCard.styled";

const BlogCard = ({ data }) => {
  return (
    <BlogCardContainer to={`${data.id}`}>
      {/* <BlogCardContainer> */}
      <Image src={image} alt={data.title} />
      <BlogCard_h3 style={{ margin: " 0px" }}>{data.title}</BlogCard_h3>
      <p>{data.text}</p>
      <ButtonRead>Читати</ButtonRead>
      {/* </BlogCardContainer> */}
    </BlogCardContainer>
  );
};

export default BlogCard;
