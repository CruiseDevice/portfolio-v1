import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ContactForm = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
`;

const FormTitle = styled.h2`
  color: #333;
`;

const Breadcrumb = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SendButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: #007BFF;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`

function ContactMe () {
  return (
    <ContactForm>
      <FormTitle>Contact Me</FormTitle>
      <hr />
      <Breadcrumb><StyledLink to="/">Home</StyledLink> {'>'} Contact</Breadcrumb>
      <form>
          <label>Your email:</label>
          <Input type="email" required />
          <label>Your message:</label>
          <TextArea required></TextArea>
          <SendButton type="submit">Send</SendButton>
      </form>
    </ContactForm>
  )
}

export default ContactMe;