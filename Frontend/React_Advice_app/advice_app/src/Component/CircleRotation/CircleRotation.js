import React from 'react'
import { motion } from "framer-motion";
import styled from "styled-components";


// Styling for the Outer div
const OuterDiv = styled(motion.div)`
width: ${(props) => `max(${props.maxSize}vw, ${props.minSize}px)`};
height: ${(props) => `max(${props.maxSize}vw, ${props.minSize}px)`};
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
/* transition: 500ms linear; */
background: linear-gradient(#F38E34 50%, #15212E 50%);
/* transition-delay: 500ms; */

/* .parent_container:hover &{
    transform: rotate(180deg);
        transition-delay: 0ms;
} */
`;

/* This style is for the outline */
/* &::before, &::after{
    content: "";
    border-radius: inherit;
    position:absolute;
    inset: -4px;
    border: 2px solid black;
    transition: 500ms linear;

}

&:hover::before{
    transform: skew(30deg, 30deg);
}
&:hover::after{
    transform: skew(-30deg, -30deg);
} */

// Style for the image tag




const CircleRotation = (props) => {
    return (
        <OuterDiv as={motion.div} variants={props.rotateCircle} className={props.className} maxSize={props.maxSize} minSize={props.minSize}>
            <Circle />
        </OuterDiv>
    )
}

export default CircleRotation