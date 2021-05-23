import React from "react";
import styled from "styled-components";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import { desc, LargeTxt } from "../../styles/Styles";

const Card = () => {
  return (
    <>
      <Wrapper>
        <CardHolder>
          <Wrap>
            <Logo src={icon1} />
            <Head>Transaction Execution</Head>
            <Desc>
              When you sign up, you’re on the Free plan by default. The Free
              plan is designed for teams just starting out with visual
              collaboration
            </Desc>
          </Wrap>
          <Wrap>
            <Logo src={icon2} />
            <Head>Scalable Evolution</Head>
            <Desc>
              When you sign up, you’re on the Free plan by default. The Free
              plan is designed for teams just starting out with visual
              collaboration
            </Desc>
          </Wrap>
          <Wrap>
            <Logo src={icon3} />
            <Head>Real-time management</Head>
            <Desc>
              When you sign up, you’re on the Free plan by default. The Free
              plan is designed for teams just starting out with visual
              collaboration
            </Desc>
          </Wrap>
        </CardHolder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  margin: 0 40px;
  height: 300px;
  background: #ffffff;
  border-radius: 24px;
  @media only screen and (max-width: 650px) {
    margin: 20px 0;
  }
`;
const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1200px;
  margin: 64px auto;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const Logo = styled.img``;
const Head = styled(LargeTxt)`
  font-size: 24px;
  line-height: 30px;
`;
const Desc = styled(desc)`
  font-size: 16px;
`;
export default Card;
