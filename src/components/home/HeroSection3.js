import React from "react";
import styled from "styled-components";
import { Btn, desc, LargeTxt } from "../../styles/Styles";
import Brands from "./Brands";
import Card from "./Card";
const HeroSection3 = () => {
  return (
    <>
      <Wrapper>
        <ContentHolder>
          <DescText>
            <Custom>Customize your experience</Custom>
            <Desc>
              When you sign up, you’re on the Free plan by default. The Free
              plan is designed for <br /> teams just starting out with visual
              collaboration When you sign up
            </Desc>
          </DescText>
          <CardHolder>
            <Card />
          </CardHolder>
          <MidSection>
            <Start> Start Now</Start>
            <Love>We are loved by many Brands.....</Love>
          </MidSection>
          <Brand>
            <Brands />
          </Brand>
        </ContentHolder>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: #f5f6fa;
  width: 100%;
  height: 100%;
`;
const ContentHolder = styled.div`
  height: 100%;
  padding: 100px 0;
  @media only screen and (max-width: 650px) {
    padding: 50px 20px;
  }
`;
const DescText = styled.div``;
const CardHolder = styled.div``;
const MidSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 302px;
  @media only screen and (max-width: 650px) {
    height: 150px;
  }
`;
const Start = styled(Btn)`
  width: 387px;
  @media only screen and (max-width: 650px) {
    width: 156px;
    padding: 16px 32px 16px 32px;
  }
`;
const Love = styled.p`
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
`;
const Brand = styled.div`
  margin: 40px auto;
  max-width: 860px;
  width: 100%;
`;
const Custom = styled(LargeTxt)`
  text-align: center;
  margin: 24px auto;
  @media only screen and (max-width: 650px) {
    font-size: 40px;
  }
`;
const Desc = styled(desc)`
  text-align: center;
`;

export default HeroSection3;
