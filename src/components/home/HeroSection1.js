import React from "react";
import styled from "styled-components";
import { desc, LargeTxt, Btn } from "../../styles/Styles";
import backimg from "../../assets/backimg.png";
const HeroSection1 = () => {
  return (
    <>
      <Wrapper>
        <HeroContent>
          <Manage>
            Manage all your finance books <br /> in one platform
          </Manage>
          <SmallTxt>
            When you sign up, you’re on the Free plan by default. The Free plan
            is <br /> designed for teams just starting out with visual
            collaboration
          </SmallTxt>
          <Button>Get Started Today</Button>
        </HeroContent>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
`;
const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 70px auto;
  text-align: center;
  background-image: url(${backimg});
  object-fit: cover;
  background-size: cover;
  height: 500px;
  @media only screen and (max-width: 650px) {
    background-image: none;
  }
`;
const Manage = styled(LargeTxt)`
  text-align: center;
  margin: 32px auto;
  @media only screen and (max-width: 650px) {
    font-size: 40px;
    line-height: 50px;
  }
`;
const SmallTxt = styled(desc)`
  text-align: center;
  margin: 32px auto;
`;
const Button = styled(Btn)`
  text-align: center;
  @media only screen and (max-width: 650) {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
`;

export default HeroSection1;
