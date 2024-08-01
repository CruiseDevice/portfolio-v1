import { SocialIcon } from "react-social-icons";
import styled from "styled-components";

const Card = styled.div`
  background-color: #007BFF;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  width: 300px;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8); /* Add shadow effect */
  position: relative; /* Ensure it doesn't take up flexible space */
  max-width: 100%; /* Ensure it doesn't overflow on smaller screens */

  @media (max-width: 768px){
    // width: 50%;
    margin-bottom: 20px; /* Add space below the card on smaller screens */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

function ProfileCard () {
  return (
    <Card>
      <ProfileImage src="/dp.png"/>
      <h2>Akash Chavan</h2>
      <p>Programmer</p>
      <SocialIcons>
        <SocialIcon url="https://linkedin.com/in/johnowens" />
        <SocialIcon url="https://facebook.com/johnowens" />
        <SocialIcon url="https://twitter.com/johnowens" />
        <SocialIcon url="https://github.com/johnowens" />
        <SocialIcon url="https://stackoverflow.com/users/johnowens" />
      </SocialIcons>
      <div>
        <a href="#" style={{color: 'white'}}>Download CV</a> | <a href="#" style={{color: 'white'}}>Contact me</a>
      </div>
    </Card>
  )
}

export default ProfileCard;