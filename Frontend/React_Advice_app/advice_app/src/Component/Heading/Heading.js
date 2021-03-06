import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
text-align: center;
left: 50%;
transform: translateX(-50%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
width: 100%;
height: 100%;
`;

const Heading1 = styled(motion.h1)`
font-size: max(10vw, 70px);
color: #15212E;
font-weight: 900;
`;
const Heading2 = styled(motion.h1)`
font-size: max(10vw, 70px);
color: #15212E;
font-weight: 900;

`;


const Heading1Animation = {
    initial: {
        x: "-100vw",
        transition: {
            type: "tween",
            duration: 2.5,

        }
    },
    animate: {
        x: ["-100vw", "0vw", "0vw", "100vw"],
        transition: {
            type: "tween",
            duration: 2.5,
        }
    }
}

const Heading2Animation = {
    initial: {
        x: "100vw",
        transition: {
            type: "tween",
            duration: 2.5,

        }
    },
    animate: {
        x: ["100vw", "0vw" ,"0vw", "-100vw"],
        transition: {
            type: "tween",
            duration: 2.5,
        }
    }
}

const Heading = () => {

    return (
        <Container>
            <Heading1 as={motion.h1} variants={Heading1Animation} initial="initial" animate="animate">Advice</Heading1>
            <Heading2 as={motion.h1} variants={Heading2Animation} initial="initial" animate="animate">App</Heading2>

        </Container>
    )
}

export default Heading