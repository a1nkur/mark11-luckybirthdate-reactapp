import styled from "styled-components";

import { GoMarkGithub } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const FooterSection = () => {
  return (
    <Footer>
      <Links>
        <a href="https://github.com/ankur29mac" target="_blank">
          <GoMarkGithub style={{ color: "#fff" }} size={30} />{" "}
        </a>
        <a href="">
          <AiFillTwitterCircle style={{ color: "#fff" }} size={30} />
        </a>
        <a href="">
          <AiOutlineLinkedin style={{ color: "#fff" }} size={30} />
        </a>
        <a href="">
          <CgProfile style={{ color: "#fff" }} size={30} />
        </a>
      </Links>
      <FooterText>
        <p> © 2021 | ankur29mac</p>
      </FooterText>
    </Footer>
  );
};

export default FooterSection;

/* ---------------------------- Styled Components --------------------------- */

const Footer = styled.footer`
  min-height: 40vh;
  background-color: #000;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Links = styled.div`
  padding: 3rem 0rem;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterText = styled.div`
  padding: 2rem 0rem;
`;
