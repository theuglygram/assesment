import React from "react";
import styled from "styled-components";
import reci from "../../assets/reci.png";
import social from "../../assets/social.png";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <FooterWrap>
          <Recifa>
            <Logo src={reci} />
          </Recifa>
          <Quick>
            <Head>Quick Links</Head>
            <Links>Sign up for free</Links>
            <Links>Pricing</Links>
            <Links>Contact Sales</Links>
          </Quick>
          <Contact>
            <Head>Contact Us</Head>
            <ConLinks>Support@recifa.com</ConLinks>
            <ConLinks>+234 901 479 6881</ConLinks>
            <ConLinks>
              Suite 12 PTI Complex, PTI road, Effurun, Warri, Delta State,
              Nigeria.
            </ConLinks>
          </Contact>

          <Social>
            <Head>Social Media</Head> <Links></Links>
            <Logo src={social} />
            <Head></Head>
            <Links></Links>
          </Social>
        </FooterWrap>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: red;
  padding: 96px 0;
  color: #fff;
  @media only screen and (max-width: 650px) {
    padding: 30px 20px;
  }
`;
const Head = styled.h4`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 37px 0;
`;
const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const Recifa = styled.div``;
const Logo = styled.img``;
const Quick = styled.div``;
const Links = styled.div`
  margin: 16px 0;
`;
const ConLinks = styled.div`
  margin: 16px 0;
`;
const Contact = styled.div``;
const Social = styled.div``;

export default Footer;
