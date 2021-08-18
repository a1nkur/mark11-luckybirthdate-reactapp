import styled from "styled-components";
import neutral from "../Assets/neutral.png";
import lucky from "../Assets/lucky.png";
import unlucky from "../Assets/unlucky.png";
import AnimateWhenVisible from "./AnimateWhenVisible";

import { AiOutlineCloseCircle } from "react-icons/ai";

import { motion } from "framer-motion";
import { fade, titleAnimate, genericAnimate, imageAnimation } from "../animate";

import { useEffect, useState } from "react";

const MainSection = () => {
  // State
  const [isLucky, setIsLucky] = useState(null);
  const [data, setData] = useState({
    enteredDate: "",
    enteredLuckyNumber: "",
  });
  const [canReset, setCanReset] = useState(false);
  const [showNoti, setShowNoti] = useState(true);

  // Event Handlers
  const handleLuckCalc = (dateString, luckyNumber) => {
    let temp = "";
    let total = 0;
    for (let i = 0; i <= dateString.length; i++) {
      if (Number.isInteger(Number(dateString[i]))) {
        temp += dateString[i];
      } else {
        total += Number(temp);
        temp = "";
      }
    }
    return total % luckyNumber;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const result = handleLuckCalc(data.enteredDate, data.enteredLuckyNumber);

    if (result === 0) {
      setIsLucky(true);
    } else {
      setIsLucky(false);
    }

    setCanReset(prevState => !prevState);
  };

  const handleOnchange = e => {
    setData(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  //   useEffect(()=> {}, [])

  const handleReset = () => {
    setIsLucky(null);
    setData({
      enteredDate: "",
      enteredLuckyNumber: "",
    });
    setCanReset(prevState => !prevState);
  };

  return (
    <Main variants={genericAnimate} initial="hidden" animate="show">
      <InputContainer>
        {isLucky === null ? (
          <div className="texts">
            <h3>
              Enter your
              <AnimateWhenVisible>
                <span className="neutral-luck">birthdate</span>
              </AnimateWhenVisible>
              and{""}
              <AnimateWhenVisible>
                <span className="neutral-luck">lucky number</span>
              </AnimateWhenVisible>
            </h3>
            <h3> to break the suspense !</h3>
          </div>
        ) : null}
        {isLucky === true ? (
          <div className="texts">
            <motion.h3 variants={titleAnimate}>
              Seems like you are one <span className="lucko">Lucky</span>
              {" "}
              fellow.
            </motion.h3>
            <motion.h3 variants={titleAnimate}>
              Lead a <span className="lucko">charmed</span> life.
            </motion.h3>
          </div>
        ) : null}
        {isLucky === false ? (
          <div className="texts">
            <motion.h3 variants={titleAnimate}>
              Oh snap! <span className="unlucko">Not that lucky</span>, huh?
            </motion.h3>
            <motion.h3 variants={titleAnimate}>
              Keep looking for some{" "}
              <span className="unlucko">miracle to happen.</span>
            </motion.h3>
          </div>
        ) : null}

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <input
                type="date"
                name="enteredDate"
                id="enteredDate"
                onChange={handleOnchange}
                value={data.enteredDate}
                required
              />
            </FormControl>
            <FormControl>
              <input
                type="number"
                name="enteredLuckyNumber"
                id="enteredLuckyNumber"
                placeholder={"Your Lucky number"}
                onChange={handleOnchange}
                value={data.enteredLuckyNumber}
                required
              />
            </FormControl>
            {!canReset ? (
              <button className="btn-check" type="submit">
                Check
              </button>
            ) : (
              <button className="btn-check" type="submit" onClick={handleReset}>
                Try Another
              </button>
            )}
          </form>
        </FormContainer>
        {showNoti && (
          <NotificationContainer>
            <p>Privacy Notice! We are not storing your data. </p>
            <AiOutlineCloseCircle
              style={{ color: "red" }}
              onClick={() => setShowNoti(false)}
            />
          </NotificationContainer>
        )}
      </InputContainer>
      <ImageContainer>
        {isLucky === null ? (
          <AnimateWhenVisible>
            <img src={neutral} alt="neutral" />
          </AnimateWhenVisible>
        ) : null}
        {isLucky === true ? (
          <motion.img variants={imageAnimation} src={lucky} alt="lucky" />
        ) : null}
        {isLucky === false ? (
          <motion.img variants={imageAnimation} src={unlucky} alt="unlucky" />
        ) : null}
      </ImageContainer>
    </Main>
  );
};

export default MainSection;

/* ---------------------------- Styled Components --------------------------- */

const Main = styled(motion.main)`
  min-height: 100vh;
  padding: 10rem 5rem;
  display: flex;
  .neutral-luck {
    color: #6c63ff;
  }

  .lucko {
    color: #3ad29f;
  }

  .unlucko {
    color: #f55f44;
  }
`;

const InputContainer = styled.div`
  padding: 2rem 2rem;
  flex: 0.6;
  order: 2;

  h3 {
    font-size: 2rem;
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  flex: 0.4;
  order: 1;
`;

const FormContainer = styled.div`
  padding: 2rem 0rem;

  .btn-check {
    padding: 0.7rem;
    width: 20%;
    border: 0.1rem solid #6c63ff;
    background-color: transparent;
    border-radius: 3px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: #6c63ff;
      border: 0.1rem solid #000;
    }
  }
`;

const FormControl = styled.div`
  margin-bottom: 1.5rem;
  input {
    padding: 1rem;
    width: 80%;
    border: none;
    border-bottom: 0.1rem solid #000;

    font-size: 1rem;

    &:focus {
      border: none;
      outline: none;
      border-bottom: 0.1rem solid #6c63ff;
    }
  }
`;

const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 0.1rem solid #3ad29f;
  border-radius: 3px;
  width: 80%;

  svg {
    cursor: pointer;
  }
`;
