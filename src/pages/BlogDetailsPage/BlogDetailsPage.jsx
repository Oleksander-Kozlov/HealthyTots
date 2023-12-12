import { Link, useParams } from "react-router-dom";
// import { getProductById } from "../fakeAPI";
import data from "../../../blogcards.json";

// import image from "../../assets/BlogCards/BlogCard.jpeg"
import image from "../../assets/BlogCards/BlogCard.jpeg";
import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogCardsContainer } from "../BlogPage/BlogPage.styled";

import {
  BlogContainer,
  ImageTextContainer,
  ImageWraper,
  LinkContainer,
  TextWrapper,
  TitleContainer,
} from "./BlogDetailsPage.styled";


// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }
function getRandomElements(array, numberOfElements) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Select the first numberOfElements elements
  return array.slice(0, numberOfElements);
}

const BlogDetailsPage = () => {
  const { id } = useParams();
  const cutCurrentBlog = data.filter((blog) => 
    blog.id !== id)
    
  const item = data.filter((item) => item.id.includes(id))[0];
  // console.log("BlogDetailsPageid", `../../${item.image}`)
  // console.log(item);
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
            Позитивне ставлення до лікаря Почніть з того, щоб створити позитивне
            уявлення про лікаря. Розповідайте своїй дитині про корисність
            візитів до лікаря та як вони допомагають зберегти здоров&apos;я.
            Намагайтеся уникати негативних висловлювань про лікарні та медичні
            процедури. Розповідайте позитивні історії Розповідайте своїй дитині
            позитивні історії про свої візити до лікаря. Акцентуйте увагу на
            тому, як лікарі допомагають людям і як важливо вчасно звертатися до
            них для збереження здоров&apos;я. Обговорюйте процедури перед
            візитом Перед тим, як піти до лікаря, обговоріть з дитиною, що вона
            може чекати під час візиту. Розповідайте про будь-які процедури чи
            випробування, які можуть бути проведені. Знайомство з інформацією
            дозволяє дітям краще розуміти та контролювати ситуацію. Будьте
            підтримкою Пам&apos;ятайте, що подолання страху вимагає часу та
            терпіння. Заохочуйте дитину, вислуховуйте її побоювання та поступово
            привчайте до ідеї відвідування лікаря як невід&apos;ємної частини
            догляду за своїм здоров&apos;ям.
          </p>
        </div>
      </TitleContainer>
      <BlogCardsContainer style={{marginTop:"48px", marginBottom: "16px"}}>
          {getRandomElements(cutCurrentBlog, 3).map((data) => {
            return <BlogCard key={data.id} data={data} />;
          })}
        </BlogCardsContainer>
    </BlogContainer>

    // <section><BlogContainer>

    // {/* </Wrapper> */}

    // </BlogContainer>
    // </section>
  );
};

export default BlogDetailsPage;
