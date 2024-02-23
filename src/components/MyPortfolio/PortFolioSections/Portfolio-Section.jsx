import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  flex: 1;
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumns>
        <FooterColumn>
          <FooterHeading>Column 1</FooterHeading>
          <FooterLink href="#">Link 1</FooterLink>
          <FooterLink href="#">Link 2</FooterLink>
          <FooterLink href="#">Link 3</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Column 2</FooterHeading>
          <FooterLink href="#">Link 1</FooterLink>
          <FooterLink href="#">Link 2</FooterLink>
          <FooterLink href="#">Link 3</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Column 3</FooterHeading>
          <FooterLink href="#">Link 1</FooterLink>
          <FooterLink href="#">Link 2</FooterLink>
          <FooterLink href="#">Link 3</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>Column 4</FooterHeading>
          <FooterLink href="#">Link 1</FooterLink>
          <FooterLink href="#">Link 2</FooterLink>
          <FooterLink href="#">Link 3</FooterLink>
        </FooterColumn>
      </FooterColumns>
    </FooterContainer>
  );
};

export default Footer;
