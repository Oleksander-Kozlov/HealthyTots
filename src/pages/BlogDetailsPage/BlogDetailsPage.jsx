import { Link, useParams } from "react-router-dom";
import data from "../../assets/JSONs/blogcards.json";

import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogCardsContainer } from "../BlogPage/BlogPage.styled";
import image from "assets/img/blogCardsImg/blogCard.jpeg";

import {
  BlogContainer,
  ImageTextContainer,
  ImageWraper,
  LinkContainer,
  TextWrapper,
  TitleContainer,
} from "./BlogDetailsPage.styled";

function getRandomElements(array, numberOfElements) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array.slice(0, numberOfElements);
}

const BlogDetailsPage = () => {
  const { id } = useParams();
  const cutCurrentBlog = data.filter((blog) => blog.id !== id);

  const item = data.filter((item) => item.id.includes(id))[0];

  return (
    <BlogContainer>
      <LinkContainer>
        <Link to="/">
          {" "}
          <p style={{ color: "#94B0B7" }}> Головна /</p>
        </Link>
        <Link to="/blog">
          {" "}
          <p style={{ color: "#94B0B7" }}>&nbsp;Блог/&nbsp; </p>
        </Link>
        <p style={{ fontSize: "14px" }}>{item.title} </p>
      </LinkContainer>
      <TitleContainer>
        {/* <Wrapper> */}
        <h2>{item.title}</h2>
        <ImageTextContainer>
          <ImageWraper src={image} alt="logoHT" />
          <TextWrapper>
            Лікарські візити можуть стати джерелом стресу для багатьох дітей.
            Вони часто асоціюють лікарні з несприятливими враженнями, які
            викликають страх та тривогу. Але як батькам допомогти своїм дітям
            подолати цей страх і зробити візит до лікаря менш страшним? Важливо
            навчити дітей розуміти, що це частина збереження їхнього
            здоров&apos;я, а не щось, що призведе до неприємностей. Ось кілька
            порад для батьків:
          </TextWrapper>
        </ImageTextContainer>
        <div>
          <p>
            Позитивне ставлення до лікаря. Почніть з того, щоб створити
            позитивне уявлення про лікаря. Розповідайте своїй дитині про
            корисність візитів до лікаря та як вони допомагають зберегти
            здоров&apos;я. Намагайтеся уникати негативних висловлювань про
            лікарні та медичні процедури. Розповідайте позитивні історії
            Розповідайте своїй дитині позитивні історії про свої візити до
            лікаря. Акцентуйте увагу на тому, як лікарі допомагають людям і як
            важливо вчасно звертатися до них для збереження здоров&apos;я.
            Обговорюйте процедури перед візитом Перед тим, як піти до лікаря,
            обговоріть з дитиною, що вона може чекати під час візиту.
            Розповідайте про будь-які процедури чи випробування, які можуть бути
            проведені. Знайомство з інформацією дозволяє дітям краще розуміти та
            контролювати ситуацію. Будьте підтримкою Пам&apos;ятайте, що
            подолання страху вимагає часу та терпіння. Заохочуйте дитину,
            вислуховуйте її побоювання та поступово привчайте до ідеї
            відвідування лікаря як невід&apos;ємної частини догляду за своїм
            здоров&apos;ям.
          </p>
        </div>
      </TitleContainer>
      <BlogCardsContainer style={{ marginTop: "48px", marginBottom: "16px" }}>
        {getRandomElements(cutCurrentBlog, 3).map((data) => {
          return <BlogCard key={data.id} data={data} />;
        })}
      </BlogCardsContainer>
    </BlogContainer>
  );
};

export default BlogDetailsPage;
