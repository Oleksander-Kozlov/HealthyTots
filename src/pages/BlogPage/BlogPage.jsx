import { useState } from "react";

import {
  BlogCardsContainer,
  BlogContainer,
  InputBlogSearch,
  Paginate,
  SearchContainer,
} from "./BlogPage.styled";
import { IoIosSearch } from "react-icons/io";

import data from "../../../blogcards.json";
import BlogCard from "../../components/BlogCard/BlogCard";
import { LinkContainer } from "../BlogDetailsPage/BlogDetailsPage.styled";
import { Link, useSearchParams } from "react-router-dom";

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
// _____________________________SearchParams_______________________________

  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = visibleBlogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(visibleBlogs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % visibleBlogs.length;
    setItemOffset(newOffset);
  };


  return (

    <section style={{ marginBottom: "48px", paddingBottom: "0px", paddingTop:"4px" }}>
       

      <BlogContainer>
        <LinkContainer>
        <Link to="/">
          <p style={{ color: "#94B0B7" }}> Головна /</p>
        </Link>
        <p style={{ fontSize: "14px" }}>&nbsp;Блог</p>
      </LinkContainer>
        <h2>Блог</h2>

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
            onChange={({target}) => onChange(target.value)}
          />
        </SearchContainer>

        <BlogCardsContainer>
          {currentItems.map((data) => {
            return <BlogCard key={data.id} data={data} />;
          })}
        </BlogCardsContainer>
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
    </section>
  );
};

export default BlogPage;
