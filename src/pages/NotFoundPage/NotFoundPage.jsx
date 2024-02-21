import {
  BackHomeLink,
  Container,
  RightSideContainer,
} from "./NotFoundPage.styled";

import NotFoundSvg from "../../assets/svg/NotFound.svg";

const NotFoundPage = () => {
  return (
    <section style={{ marginBottom: "0px", paddingBottom: "0px" }}>
      <Container>
        <img src={NotFoundSvg} alt="NotFound" />
        <RightSideContainer>
          <h2>Ой-ой!</h2>
          <p>
            Здається, cторінку атакували злі віруси та бактерії! Aле наш
            суперлікар вже працює над цим.
          </p>
          <p>Вибачте за непорозуміння та вдячні за ваше терпіння.</p>
          <BackHomeLink to="/">Повернутися на головну</BackHomeLink>
        </RightSideContainer>
      </Container>
    </section>
  );
};
export default NotFoundPage;
