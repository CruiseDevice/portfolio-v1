import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 80px;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border.medium};
  text-align: center;
`;

const FooterText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
`;

function Footer() {
  return (
    <FooterWrapper role="contentinfo">
      <FooterText>
        &copy; {new Date().getFullYear()} · Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
