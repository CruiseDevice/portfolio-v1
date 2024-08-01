import React from "react";
import styled from "styled-components";

const BlogItemWrapper = styled.div`
  text-align: center;
  margin: 10px;
  flex: 1;
  min-width: 200px;
`;

const BlogImage = styled.img`
  height: auto;
  border-radius: 10px;
`;

const BlogTitle = styled.h3`
  margin: 10px 0 5px;
  font-weight: bold;
`;

const BlogDescription = styled.p`
  color: #757575
`;

function BlogItem ({image, title, description}: {
  image: string, title: string, description: string
}) {
  return (
    <BlogItemWrapper>
      <BlogImage src={image} alt={title}/>
      <BlogTitle>{title}</BlogTitle>
      <BlogDescription>{description}</BlogDescription>
    </BlogItemWrapper>
  )
}

export default BlogItem;