import {
  BackHomeLink,
  Container,
  NotFoundH2,
  NotFoundSection,
  NotFound_p,
  RightSideContainer,
} from "./NotFoundPage.styled";

import pngNotFound_320px_1x from "../../assets/img/notFound/pngNotFound_320px@1x.png";
import pngNotFound_640px_2x from "../../assets/img/notFound/pngNotFound_640px@2x.png";
import pngNotFound_587px_1x from "../../assets/img/notFound/pngNotFound_587px@1x.png";
import pngNotFound_1174px_2x from "../../assets/img/notFound/pngNotFound_1174px@2x.png";

const NotFoundPage = () => {
  return (
    <NotFoundSection>
      <Container>
        <RightSideContainer>
          <NotFoundH2>Ой-ой!</NotFoundH2>
          <NotFound_p>
            Здається, cторінку атакували злі віруси та бактерії! Aле наш
            суперлікар вже працює над цим.
          </NotFound_p>
          <NotFound_p>
            Вибачте за непорозуміння та вдячні за ваше терпіння.
          </NotFound_p>
          <BackHomeLink to="/">Повернутися на головну</BackHomeLink>
        </RightSideContainer>
        <img
          style={{ alignSelf: "center" }}
          srcSet={`${pngNotFound_320px_1x} 320w,    ${pngNotFound_587px_1x} 587w,   ${pngNotFound_640px_2x} 640w,   ${pngNotFound_1174px_2x} 1174w  `}
          sizes="(max-width: 1439.98px) 320px, 587px"
          src={pngNotFound_320px_1x}
          alt="NotFound"
        />
      </Container>
    </NotFoundSection>
  );
};
export default NotFoundPage;
