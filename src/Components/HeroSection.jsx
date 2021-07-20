import styled from "styled-components";
import imageOne from "../Assets/imageOne.png";

const HeroSection = () => {
  return (
    <Header>
      <TitleContainer>
        <h1>Is Your Birthday Lucky?</h1>
        <h1>Let's find out.</h1>
      </TitleContainer>
      <ImageContainer>
        <img src={imageOne} alt="" />
      </ImageContainer>
    </Header>
  );
};

export default HeroSection;

/* ---------------------------- Styled Components --------------------------- */

const Header = styled.header`
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
`;

const ImageContainer = styled.div`
  padding-right: 3rem;
  display: flex;
  align-items: flex-end;
  flex: 0.4;
  img {

  }
`;
