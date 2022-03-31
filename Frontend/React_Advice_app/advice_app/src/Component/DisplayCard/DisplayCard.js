import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import Button from '../Button/Button';
import axios from "../../axios/axios"
import Spinner from '../Spinner/Spinner';

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
  const [showSpinner, setSpinner] = useState(false);
  const buttonClickHandler = () => {
    setSpinner(true);
    axios.get("/advice")
      .then(response => {
        setTimeout(() => {
          setSpinner(false);
          setAdvice(response.data.slip.advice)
        }, 500)
      })
      .catch(err => {
        setSpinner(false);
        console.log(err);
      })
  }

  let display = (<Advice>
    {advice ? advice : props.mainContent}
  </Advice>)

  if (showSpinner) {
    display = (<Spinner />)
  }
  return (
    <DisplayCardContainer as={motion.div} variants={props.displayCard}>
      {display}
      <Button buttonClick={buttonClickHandler} />
    </DisplayCardContainer>
  )
}

export default DisplayCard