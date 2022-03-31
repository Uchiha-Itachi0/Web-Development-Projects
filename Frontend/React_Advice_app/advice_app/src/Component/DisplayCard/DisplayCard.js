import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import Button from '../Button/Button';
import axios from "../../axios/axios"

const DisplayCardContainer = styled(motion.div)`
background-color: #fff;
position: absolute;
inset: 0;
padding: 1vw;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
text-align: center;
`;

const Advice = styled.h1`
font-size: max(2vw, 25px);
`;

const DisplayCard = (props) => {

  const [advice, setAdvice] = useState("");
  const buttonClickHandler = () => {
    axios.get("/advice")
      .then(response => {
        setAdvice(response.data.slip.advice);
      })
      .catch(err => console.log())
  }
  return (
    <DisplayCardContainer as={motion.div} variants={props.displayCard}>
      <Advice>
        {advice ? advice : props.mainContent}
      </Advice>
      <Button buttonClick={buttonClickHandler} />
    </DisplayCardContainer>
  )
}

export default DisplayCard