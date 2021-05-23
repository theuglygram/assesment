import React from "react";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HeroSection1 from "../components/home/HeroSection1";
import HeroSection2 from "../components/home/HeroSection2";
import HeroSection3 from "../components/home/HeroSection3";
import { HeroSection4 } from "../components/home/HeroSection4";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Header />
      <Wrap>
        <HeroSection1 />
        <HeroSection2 />
      </Wrap>
      <HeroSection3 />
      <HeroSection4 />
      <Footer />
    </>
  );
};

const Wrap = styled.div`
  @media only screen and (max-width: 650px) {
    padding: 0 20px;
  }
`;

export default Home;
