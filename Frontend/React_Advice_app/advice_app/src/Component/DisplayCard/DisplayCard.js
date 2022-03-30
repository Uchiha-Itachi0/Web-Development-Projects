import React from 'react'
// import CircleRotation from '../CircleRotation/CircleRotation';
import styled from 'styled-components';
import { motion } from "framer-motion";

const DisplayCardContainer = styled(motion.div)`
background-color: #fff;
position: absolute;
inset: 0;
/* transform: translateX(-100%); */
/* transition: 500ms;
transition-delay: 0ms; */
padding: 1vw;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
text-align: center;


/* .parent_container:hover &{
    transform: translateX(0);
    transition-delay: 500ms;
} */
`;
// const SmallCircleRotation = styled(CircleRotation)`
// position: absolute;
// bottom: -5%;
// z-index: 100;
// left: 50%;
// transform: translateX(-50%);
// `;

const ButtonStyle = styled.button`
  padding: .5em 3em;
  font-size: 2vw;
`;

const DisplayCard = (props) => {
  return (
    <DisplayCardContainer as={motion.div} variants={props.displayCard}>

      <h1>"If you are ever in doubt about whether or not to wash your hair: Wash it."</h1>
      <ButtonStyle>Next</ButtonStyle>
    </DisplayCardContainer>
  )
}

export default DisplayCard