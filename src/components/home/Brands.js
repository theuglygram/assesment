import React from "react";
import styled from "styled-components";
import Allianz from "../../assets/Allianz.png";
import ball from "../../assets/ball.png";

import HSBC from "../../assets/HSBC.png";
import MasterCard from "../../assets/MasterCard.png";
import VISA from "../../assets/VISA.png";

const Brands = () => {
  return (
    <Wrapper>
      <BrandWrapper>
        <Logo src={Allianz} />
        <Logo src={ball} />

        <Logo src={HSBC} />
        <Logo src={MasterCard} />
        <Logo src={VISA} />
      </BrandWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; ;
`;
const BrandWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    margin: 20px 0;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
const Logo = styled.img`
  @media only screen and (max-width: 650px) {
    margin: 30px 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;
export default Brands;
