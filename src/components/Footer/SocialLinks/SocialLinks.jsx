import { FollowUsContainer, LinkContainer } from "./SocialLinks.styled"
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <FollowUsContainer>
            <LinkContainer
        href="https://www.instagram.com/healthytots.pediatriya/?igshid=MzMyNGUyNmU2YQ%3D%3D"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Instagram"
        title="Instagram"
      >
                
                <RiInstagramFill style={{ fontSize: 40, fill: "#BDDFEF" }} />
        </LinkContainer>
                    <LinkContainer
                    href="https://www.facebook.com/SolomkoLiudmyla"
                    target="_blank"
                    rel="noreferrer noopener"
                aria-label="link to Facebook"
                    title="Facebook"
            >
                <FaFacebookSquare style={{ fontSize: 40, fill: "#BDDFEF" }}/>
                        
                    </LinkContainer>
                    </FollowUsContainer>
)
}
export default SocialLinks