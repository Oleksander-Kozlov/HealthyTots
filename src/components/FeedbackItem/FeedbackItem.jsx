import {FeedbackStar} from "../../assets/svg/SvgIcons.jsx";

import { Avatar, Duration, FeedbackContainer, FeedbackText, Name, PersonContainer, PersonInfo, StarsContainer } from "./FeedbackItem.styled";

const FeedbackItem = ({ obj, avatar }) => {
    
  const starsArray = Array.from({ length: obj.stars }, (_, index) => index);
  return (
    
      <FeedbackContainer>
        <PersonContainer>
          <Avatar src={avatar} alt="avatar" />
          <PersonInfo>
            <Name>{obj.name}</Name>
            <StarsContainer>
              {starsArray.map((_, index) => (
                <FeedbackStar key={index} />
              ))}
            </StarsContainer>
            <Duration>{obj.date}</Duration>
          </PersonInfo>
        </PersonContainer>
        <FeedbackText>{obj.feedbackText}</FeedbackText>
      </FeedbackContainer>
  );
};

export default FeedbackItem;
