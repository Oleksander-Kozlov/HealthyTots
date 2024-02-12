import { styled } from "styled-components";
export const BlogContainer = styled.div`
  /* padding: 0 120px; */
  padding: 0 120px 32px 120px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const LinkContainer = styled.div`
 
  display: flex;
  align-self: start;
  margin-bottom: 16px;
`;
export const Wrapper = styled.div`
  padding: 0 120px;
  overflow: hidden;
  text-align: start;
`;
export const ImageWraper = styled.img`
  width: 588px;
  height: 404px;
  border-radius: 20px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
export const TextWrapper = styled.p`
  font-size: 24px;
`;
export const TitleContainer = styled.div`
  display: flex;
  margin-top: 28px;
  flex-direction: column;
  gap: 48px;
`;

export const ImageTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 136px;
`;
