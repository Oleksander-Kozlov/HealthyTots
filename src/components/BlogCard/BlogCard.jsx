/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import image from "../../assets/BlogCards/BlogCard.jpeg"
import { BlogCardContainer, Image, ButtonRead } from "./BlogCard.styled";

const BlogCard = ({data}) => {
  
    return (
        
          
        <Link to={`${data.id}`}><BlogCardContainer>
           <Image src={image}  alt={data.title} />
          <h3 style={{margin:" 0px"}}>{data.title}</h3>
          <p style={{flexBasis:" 30%"}}>{data.text}</p>
          <ButtonRead>Читати</ButtonRead>
 </BlogCardContainer>
          </Link>
        
       
        
           
        
      )
  };
  
  export default BlogCard;