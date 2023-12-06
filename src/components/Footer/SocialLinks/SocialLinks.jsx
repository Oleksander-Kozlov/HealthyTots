import { FollowUsContainer, LinkContainer } from "./SocialLinks.styled"
import FacebookLogo from '../../../img/svg/facebook.svg';
import InstagramLogo from '../../../img/svg/instagram.svg';
// import { ReactComponent as FacebookLogoLink } from '../../../img/svg/facebook.svg';
const SocialLinks = () => {
    
    return (

        <FollowUsContainer>
            <LinkContainer
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to Instagram"
        title="Instagram"
      >
            <img src={InstagramLogo} alt="Instagram Logo" />
        </LinkContainer>
                    <LinkContainer
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                aria-label="link to Facebook"
                    title="Facebook"
                  >
                        <img src={FacebookLogo} alt="Facebook Logo" />
                        
                    </LinkContainer>
                    </FollowUsContainer>
)
}
export default SocialLinks