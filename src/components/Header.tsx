import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import profileData from "../data/profile.json";

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 20px;
  border: 2px solid #e0e0e0;
`;

const Name = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #1a1a1a;
`;

const Title = styled.p`
  font-size: 16px;
  color: #666666;
  margin: 0 0 20px 0;
`;

const Nav = styled.nav`
  margin: 24px 0 20px 0;

  a {
    margin: 0 16px;
    color: #333333;
    font-size: 15px;

    &:hover {
      color: #000000;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 16px;
`;

const CVLink = styled.a`
  display: inline-block;
  margin-top: 16px;
  color: #333333;
  font-size: 14px;
  padding: 8px 20px;
  border: 1px solid #333333;
  border-radius: 3px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333333;
    color: #ffffff;
    text-decoration: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <ProfileImage src={profileData.profileImage} alt={profileData.name} />
      <Name>{profileData.name}</Name>
      <Title>{profileData.title}</Title>
      <Nav>
        <a href="/">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#research">Research</a>
      </Nav>
      <SocialLinks>
        <SocialIcon
          url={profileData.socialLinks.linkedin}
          style={{height: 32, width: 32}}
          bgColor="#333333"
        />
        <SocialIcon
          url={profileData.socialLinks.github}
          style={{height: 32, width: 32}}
          bgColor="#333333"
        />
      </SocialLinks>
      <CVLink href={profileData.resumePath} download>
        Curriculum Vitae (PDF)
      </CVLink>
    </HeaderContainer>
  );
}

export default Header;
