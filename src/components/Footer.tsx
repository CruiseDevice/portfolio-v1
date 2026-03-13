import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.section};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  text-align: center;
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.subtle};
  margin: 0;
`;

function Footer() {
  return (
    <FooterWrapper role="contentinfo">
      <FooterText>
        &copy; {new Date().getFullYear()} Akash Chavan. Built with React.
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
