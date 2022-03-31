/* 
I will have a card component which will receive props like image, text
Which means in this card component everything will be dynamic.
*/

import React, { useState } from 'react'
import CircleRotation from '../CircleRotation/CircleRotation'
import DisplayCard from '../DisplayCard/DisplayCard';
import styled from "styled-components";
import { motion } from "framer-motion";


const CardContainer = styled(motion.div)`
display: flex;
flex-direction:column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
min-height: 100vh;
`;
const CardStyle = styled(motion.div)`
position: relative;
width: max(50vw, 350px);
max-height: max-content;
min-height: 55vh;
background-color: white;
display: flex;
flex-direction:column;
justify-content: space-evenly;
align-items: center;
background: #FFF;
box-shadow: 0 0 20px 5px rgba(0, 0, 0, .5);
overflow-x: hidden;

    .parent_container_p{
        font-size: max(2vw, 20px);
    }

@media only screen and (max-width: 360px){
  width: 80vw;
}
`;


const CardAnimation = {
  initial: {
    scale: 0,
    transition: {
      type: "spring"
    }
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      delay: 2.5
    }
  }
}

const rotateCircle = {
  rest: {
    rotate: 0,
    transition: {
      type: "tween",
      delay: .5
    }
  },
  hover: {
    rotate: 180,
    transition: {
      type: "tween",
      duration: .5
    }
  },
  tap: {
    rotate: 180,
    transition: {
      type: "tween",
    }

  }
}

const displayCard = {
  rest: {
    x: "-100%",
    transition: {
      type: "tween",
      duration: .5
    }
  },
  hover: {
    x: 0,
    transition: {
      type: "tween",
      duration: .5,
      delay: .5
    }
  }
}

const Card = (props) => {

  const [clicked, setClicked] = useState(false);

  const mouseEnterHandler = () => setClicked(true)
  const mouseLeaveHandler = () => setClicked(false)


  return (
    <CardContainer as={motion.div} variants={CardAnimation} initial="initial" animate="animate">
      <CardStyle as={motion.div} initial="rest" animate={clicked ? "hover" : "rest"} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <CircleRotation maxsize={10} minsize={200} rotateCircle={rotateCircle} />
        <p className='parent_container_p'>Hover or Click</p>
        <DisplayCard displayCard={displayCard} mainContent={props.mainContent}/>
      </CardStyle>
    </CardContainer>
  )
}

export default Card