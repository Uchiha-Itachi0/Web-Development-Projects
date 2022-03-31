import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonStyle = styled(motion.button)`
  padding: .5em 3em;
  font-size: max(2vw, 30px);
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;

  @media only screen and (max-width: 330px){
      font-size: 6vw;
  }
`;

const ButtonAnimation = {
    rest: {
        background: "linear-gradient(45deg, #15212E 50%, #F38E34 50%)",
        transition: {
            type: "spring",
            duration: .5
        }
    },
    hover: {
        background: "linear-gradient(135deg, #F38E34 50%, #15212E 50%)",
        transition: {
            type: "spring",
            duration: .5
        }
    }
}

const Button = (props) => {

    const [buttonState, setButtonState] = useState(false);
    const mouseEnterHandler = () => setButtonState(true)
    const mouseLeaveHandler = () => setButtonState(false)
    return (
            <ButtonStyle onClick={props.buttonClick} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} as={motion.button} variants={ButtonAnimation} initial="rest" animate={buttonState ? "hover" : "rest"}>Next</ButtonStyle>
    )
}

export default Button