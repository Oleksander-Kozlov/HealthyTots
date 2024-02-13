import { styled } from "styled-components";
export const BlogContainer = styled.div`
  padding: 0 20px;
  @media screen and (max-width: 359.98px) {
    padding: 0 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    /* padding: 0 120px; */
    padding: 0 120px 32px 120px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-self: start;
    
`;
export const Wrapper = styled.div`
  padding: 0 120px;
  overflow: hidden;
  text-align: start;
`;
export const ImageWraper = styled.img`
  border-radius: 20px;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    width: 100%;
    /* height: 404px; */
  }
  @media screen and (min-width: 1440px) {
    width: 588px;
    margin: 0;
  }
`;
export const TextWrapper = styled.p`
  font-size: 24px;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;
export const TitleContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;

    flex-direction: column;
    gap: 48px;
  }
`;
export const BlogDetailsH2 = styled.h2`
  font-size: 24px;
  margin: 28px 0;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const ImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    /* align-items: center; */
    gap: 48px;
  }
`;
