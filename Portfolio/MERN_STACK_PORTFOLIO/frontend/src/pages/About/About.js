import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import AboutStyle from './AboutStyle'


const aboutAnimate = {
    initial: {
        x: "-100vw",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    animate: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
            type: "spring"
        }
    },
    exit: {
        x: "100vw",
        opacity: 0,
        transition: {
            duration: 1,
            type: "spring"
        }
    }
}
const About = () => {
    return (
        <AboutStyle as={motion.div} 
        animate="animate" 
        initial="initial"
        exit="exit"
        variants={aboutAnimate}>
            <SectionHeading isSecondary>ABOUT</SectionHeading>
            <p className="about_content">
                I’m an Open-Source enthusiast & a junior pursuing my Bachelors
                in Electronics and Telecommunication
                (currently in 1st year) but I am more
                passionate about Computer Science &
                Engineering. I am creatively curious
                and a self learner. I love exploring
                new technologies and currently learning
                new skills. I've worked on many small
                projects which helps me to expand my
                knowledge and learn some new skills.
            </p>
            <p className="about_footer">Interested in working togather</p>
            <a href="mailto:anubhav008shukla@gmail.com" className="about_link">Drop a note</a>
        </AboutStyle>
    )
}

export default About