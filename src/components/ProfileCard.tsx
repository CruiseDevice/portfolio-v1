import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { TypeAnimation } from 'react-type-animation';

const Card = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%); 
  color: #333;
  padding: 30px 20px;
  text-align: center;
  border-radius: 16px;
  width: 320px;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); /* Add shadow effect */
  position: relative; /* Ensure it doesn't take up flexible space */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2)
  }

  @media (max-width: 768px){
    margin-bottom: 20px; /* Add space below the card on smaller screens */
    width: 90%;
    max-width: 320px;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 15px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2)
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;


const ImageBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #007BFF;
  border-top-color: transparent;
  animation: spin 4s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Divider = styled.hr`
  width: 70%;
  margin: 15px auto;
  border: none;
  height: 2px;
  background: linear-gradient(to right, transparent, #007BFF, transparent);
`;


const Name = styled.h2`
  margin-bottom: 5px;
  font-size: 26px;
  font-weight: 700;
  background: linear-gradient(120deg, #0062E6, #33AEFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
`;

const Title = styled.div`
  display: block;
  margin-top: 10px 0 20px;
  font-size: 18px;
  font-weight: 500;
  color: #555;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
`;

const SocialIconWrapper = styled.div`
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: linear-gradient(to right, #0062E6, #33AEFF);
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 600;
  margin-top: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 98, 230, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 98, 230, 0.4);
    background: linear-gradient(to right, #005ad1, #1e9bff);
  }
`;


function ProfileCard () {
  return (
    <Card>
      <ProfileImageContainer>
        <ProfileImage src="profilecard/dp.png" alt="Akash Chavan"/>
        <ImageBorder />
      </ProfileImageContainer>
      <Divider />
      <Name>Akash Chavan</Name>
      <Title>
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
          style={{ fontWeight: 'bold' }}
          repeat={Infinity}
        />
      </Title>
      <SocialIcons>
        <SocialIconWrapper>
          <SocialIcon url="https://www.linkedin.com/in/akash-chavan-82653131b/" style={{height: 40, width: 40}}/>
        </SocialIconWrapper>
        <SocialIconWrapper>
          <SocialIcon url="https://github.com/CruiseDevice" style={{height: 40, width: 40}}/>
        </SocialIconWrapper>
      </SocialIcons>
      <DownloadButton href="/resume.pdf" download>
        Download CV
      </DownloadButton>
    </Card>
  )
}

export default ProfileCard;