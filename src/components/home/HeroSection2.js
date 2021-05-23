import React from "react";
import styled from "styled-components";
import dash from "../../assets/dash.png";

import icon2 from "../../assets/icon2.svg";

import { desc, LargeTxt } from "../../styles/Styles";

const HeroSection2 = () => {
  return (
    <>
      <Wrapper>
        <ContentHolder>
          <TextContent>
            <MainText>Everything you need in one place</MainText>
            <Desc>
              When you sign up, you’re on the Free plan by default. The Free
              plan is designed for teams just starting out with visual
              collaboration When you sign up, you’re on the Free plan by
              default.
            </Desc>
            <List>
              <ListItems>
                <Ico src={icon2} /> Receipts
              </ListItems>
              <ListItems>
                <Ico src={icon2} /> Invoicing
              </ListItems>
              <ListItems>
                <Ico src={icon2} /> BOQS
              </ListItems>
            </List>
          </TextContent>
          <ImgContent>
            <Img src={dash} />
          </ImgContent>
        </ContentHolder>
      </Wrapper>
    </>
  );
};
const Ico = styled.img`
  width: 35px;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const ContentHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin: 70px auto;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const TextContent = styled.div``;
const ImgContent = styled.div``;
const Img = styled.img`
  object-fit: cover;
  width: auto;
  max-width: 100%;
`;

const MainText = styled(LargeTxt)`
  @media only screen and (max-width: 650px) {
    font-size: 40px;
    line-height: 50px;
  } ;
`;
const Desc = styled(desc)``;
const List = styled.div``;
const ListItems = styled.li`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  list-style: none;
  margin: 28px 0;
  display: flex;
  align-items: center;
`;

export default HeroSection2;
