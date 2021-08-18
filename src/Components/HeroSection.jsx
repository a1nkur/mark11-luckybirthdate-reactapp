import styled from "styled-components";
import imageOne from "../Assets/imageOne.png";

import { motion } from "framer-motion";
import { fade, titleAnimate, genericAnimate, imageAnimation } from "../animate";

const HeroSection = () => {
  return (
    <Header variants={genericAnimate} initial="hidden" animate="show">
      <TitleContainer>
        <Hide>
          <motion.h1 variants={titleAnimate}>
            Is Your Birthday <span>Lucky</span>?
          </motion.h1>
        </Hide>
        <Hide>
          <motion.h1 variants={titleAnimate}>Let's find out.</motion.h1>
        </Hide>
      </TitleContainer>
      <ImageContainer>
        <motion.img variants={imageAnimation} src={imageOne} alt="" />
      </ImageContainer>
    </Header>
  );
};

export default HeroSection;

/* ---------------------------- Styled Components --------------------------- */

const Header = styled(motion.header)`
  min-height: 100vh;
  background-color: #000000;
  color: #fff;
  display: flex;
`;

const TitleContainer = styled.div`
  flex: 0.6;
  padding: 12rem 0rem 0rem 6rem;
  h1 {
    font-size: 4rem;
    font-weight: bold;
  }

  span {
    color: #6c63ff;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  padding-right: 3rem;
  display: flex;
  align-items: flex-end;
  flex: 0.4;
  img {
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
