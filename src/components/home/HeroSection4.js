import React from "react";
import styled from "styled-components";
import { Btn, LargeTxt } from "../../styles/Styles";

export const HeroSection4 = () => {
  return (
    <>
      <Wrapper>
        <ContentHolder>
          <Stand>
            Standout from the crowd with quality customer service delivery
          </Stand>
          <StandBtn>Stand Out Now</StandBtn>
        </ContentHolder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  background: #0577ec;
  padding: 50px 0;
  text-align: center;
`;
const ContentHolder = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
`;
const Stand = styled(LargeTxt)`
  color: #fff;
  font-weight: 500;
  font-size: 56px;
  text-align: center;

  @media only screen and (max-width: 650px) {
    font-size: 40px;
    line-height: 50px;
  }
`;
const StandBtn = styled(Btn)`
  color: #0577ec;
  background: #fff;
  width: 255px;
  height: auto;
  @media only screen and (max-width: 650) {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
`;
