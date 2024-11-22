import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { TypeAnimation } from 'react-type-animation';

const Card = styled.div`
  background-color: white;
  color: #333;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  width: 300px;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8); /* Add shadow effect */
  position: relative; /* Ensure it doesn't take up flexible space */
  max-width: 100%; /* Ensure it doesn't overflow on smaller screens */

  @media (max-width: 768px){
    margin-bottom: 20px; /* Add space below the card on smaller screens */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 5px solid black;
  margin-bottom: 10px;
`;

const Button = styled.a`
  color: #007BFF;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Name = styled.h2`
  margin-bottom: 0;
`;

const Title = styled.i`
  display: block;
  margin-top: 5px;
`;

function ProfileCard () {
  return (
    <Card>
      <ProfileImage src="profilecard/dp.png"/>
      <hr />
      <Name>Akash Chavan</Name>
      <Title>
        <b>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'Programmer',
            1000,
            'Software Developer',
            1000,
            'Fullstack Developer',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '1em' }}
          repeat={Infinity}
        />
        </b>
      </Title>
      <SocialIcons>
        <SocialIcon url="https://www.linkedin.com/in/akash-chavan-82653131b/" />
        <SocialIcon url="https://github.com/CruiseDevice" />
      </SocialIcons>
      <div>
        <Button as="a" href="/resume.pdf" download>Download CV</Button>
      </div>
    </Card>
  )
}

export default ProfileCard;