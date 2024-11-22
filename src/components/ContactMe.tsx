import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

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
  const [email, setEmail] =  useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");  // Clear any previous status message

    try {
      const response = await fetch(`${lambdaUrl}/submit-contact-form`, {
        method: 'POST',
        body: JSON.stringify({email, message}),
        headers: {"Content-Type": "application/json"},
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        setStatusMessage("An error occured: " + error.message);
      } else {
        setStatusMessage("An unknown error occured.");
      }
    }
  }

  return (
    <ContactForm>
      <FormTitle>Contact Me</FormTitle>
      <hr />
      <Breadcrumb><StyledLink to="/">Home</StyledLink> {'>'} Contact</Breadcrumb>
      <form onSubmit={handleSubmit}>
          <label>Your email:</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <label>Your message:</label>
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)} required></TextArea>
          <SendButton type="submit">Send</SendButton>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </ContactForm>
  )
}

export default ContactMe;