import React from "react";
import styled from "styled-components";
import recifa from "../../assets/recifa.svg";
import { Btn } from "../../styles/Styles";

const Header = () => {
  return (
    <>
      <Wrapper>
        <NavHolder>
          <LogoHolder>
            <Logo src={recifa} />
          </LogoHolder>
          <NavLinkItem>
            <NavLinks>Pricing</NavLinks>
            <NavLinks>Contact</NavLinks>
            <NavLinks>Sales</NavLinks>
            <NavLinks>Login</NavLinks>
            <Sign>Sign up Free</Sign>
          </NavLinkItem>
          <HamBurger>
            <Lines></Lines>
            <Lines></Lines>
          </HamBurger>
        </NavHolder>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  @media only screen and (max-width: 650px) {
    padding: 0 20px;
  }
`;
const HamBurger = styled.div`
  display: none;
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;
const Lines = styled.div`
  height: 2px;
  width: 25px;
  background: #000;
  margin: 5px 0;
`;
const NavHolder = styled.div`
  width: 100%auto;
  max-width: 1200px;
  margin: 40px auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const LogoHolder = styled.div``;
const Logo = styled.img``;
const NavLinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const NavLinks = styled.div``;
const Sign = styled(Btn)`
  background: #0577ec;
  height: 48px;
  width: 156px;
  border-radius: 8px;
  padding: 16px, 32px, 16px, 32px;
  color: #fff;
  box-shadow: none;
  outline: none;
  border: none;
  font-size: 16px;
`;
export default Header;
