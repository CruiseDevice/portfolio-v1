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
  width: 300px;
  height: 200px;
`;

const BlogTitle = styled.h3`
  margin: 10px 0 5px;
  font-weight: bold;
`;

function BlogItem ({image, title}: {
  image: string, title: string
}) {
  return (
    <BlogItemWrapper>
      <BlogImage src={image} alt={title}/>
      <BlogTitle>{title}</BlogTitle>
    </BlogItemWrapper>
  )
}

export default BlogItem;