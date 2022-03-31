import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";


// Styling for the Outer div
const OuterDiv = styled(motion.div)`
width: ${(props) => `max(${props.maxsize}vw, ${props.minsize}px)`};
height: ${(props) => `max(${props.maxsize}vw, ${props.minsize}px)`};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
cursor: pointer;
`;

const Circle = styled.div`
width: inherit;
height: inherit;
border-radius: 50%;
background: linear-gradient(#F38E34 50%, #15212E 50%);

`;


const CircleRotation = (props) => {
    return (
        <OuterDiv as={motion.div} variants={props.rotateCircle} className={props.className} maxsize={props.maxsize} minsize={props.minsize}>
            <Circle />
        </OuterDiv>
    )
}

export default CircleRotation