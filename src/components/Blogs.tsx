import React from "react";
import styled from "styled-components";
import BlogItem from "./BlogItem";

const BlogsWrapper = styled.div`
  margin: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
`;

const BlogsItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const AllBlogsLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Blogs () {
  return (
    <BlogsWrapper>
      <SectionTitle>My Blogs</SectionTitle>
      <BlogsItemContainer>
        <BlogItem 
          image="https://placehold.jp/300x200.png"
          title="Automate Tasks"
          description="A project to automate a lot of my daily mundane tasks"
        />
        <BlogItem 
          image="https://placehold.jp/300x200.png"
          title="Automate Tasks"
          description="A project to automate a lot of my daily mundane tasks"
        />
        <BlogItem 
          image="https://placehold.jp/300x200.png"
          title="Automate Tasks"
          description="A project to automate a lot of my daily mundane tasks"
        />
        <BlogItem 
          image="https://placehold.jp/300x200.png"
          title="Automate Tasks"
          description="A project to automate a lot of my daily mundane tasks"
        />
      </BlogsItemContainer>
      <AllBlogsLink href='#'>All Posts</AllBlogsLink>    
    </BlogsWrapper>
  )
}

export default Blogs;