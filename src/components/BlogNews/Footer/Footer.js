import React from 'react';

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
