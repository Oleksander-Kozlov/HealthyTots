import { useState } from "react";
import { useSearchParams } from "react-router-dom";


import {
  BlogCardsContainer,
  BlogContainer,
  BlogH2,
  BlogSection,
  InputBlogSearch,
  NotFound,
  NotFoundContainer,
  Paginate,
  SearchContainer,

} from "./BlogPage.styled";
import{  NavLinks} from "../ContactsPage/ContactsPage.styled"
import { IoIosSearch } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import data from "../../assets/JSONs/blogcards.json";
import BlogCard from "../../components/BlogCard/BlogCard";
import { LinkContainer } from "../../pages/BlogDetailsPage/BlogDetailsPage.styled";

const BlogPage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  // _____________________________SearchParams_______________________________

  const [searchParams, setSearchParams] = useSearchParams();
  const blogTitle = searchParams.get("title") ?? "";
  const visibleBlogs = data.filter((blog) =>
    blog.title.toLowerCase().includes(blogTitle.toLowerCase())
  );
  const onChange = (title) => {
    const nextParams = title !== "" ? { title } : {};
    setSearchParams(nextParams);
  };
  const clearSearchParams = () => {
    setSearchParams({});
  };
  console.log("visibleBlogs", visibleBlogs);
  // _____________________________SearchParams_______________________________

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = visibleBlogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(visibleBlogs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % visibleBlogs.length;
    setItemOffset(newOffset);
  };

  return (
    <BlogSection>
      <BlogContainer>
        <LinkContainer>
          <NavLinks to="/">
            <p style={{ color: "#94B0B7" }}> Головна /</p>
          </NavLinks>
          <p >&nbsp;Блог</p>
        </LinkContainer>
        <BlogH2>Блог</BlogH2>

        <SearchContainer>
          <IoIosSearch color="#94B0B7" size={24} />
          <InputBlogSearch
            type="text"
            name="title"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Пошук статті"
            value={blogTitle}
            onChange={({ target }) => onChange(target.value)}
          />

          {blogTitle.length > 0 && (
            <button
              style={{ backgroundColor: "transparent", display: "flex" }}
              onClick={clearSearchParams}
            >
              <IoCloseCircle color="#318FB5" size={24} textAlign="center" />
            </button>
          )}
        </SearchContainer>

        <BlogCardsContainer>
          {currentItems.map((data) => {
            return <BlogCard key={data.id} data={data} />;
          })}
        </BlogCardsContainer>
        {visibleBlogs.length === 0 && (
          <NotFoundContainer>
            <NotFound>На жаль, за вашим запитом нічого не знайдено</NotFound>
          </NotFoundContainer>
        )}

        <Paginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          activeClassName="selected"
        />
      </BlogContainer>
    </BlogSection>
  );
};

export default BlogPage;
