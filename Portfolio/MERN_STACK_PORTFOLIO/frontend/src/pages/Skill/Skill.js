import React from 'react'
import SkillStyle from './SkillStyle'
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import PercentageDisplayer from '../../components/PercentageDisplayer/PercentageDisplayer'
import { motion } from "framer-motion";
const skills = [
    {
        title: "01. HTML",
        percentage: "90%"
    },
    {
        title: "02. CSS",
        percentage: "90%"
    },
    {
        title: "03. Javascript",
        percentage: "80%"
    },
    {
        title: "04. Node JS",
        percentage: "75%"
    },
    {
        title: "05. React JS",
        percentage: "75%"
    },
    {
        title: "06. MongoDB",
        percentage: "70%"
    },
    {
        title: "07. Python",
        percentage: "60%"
    }
]

const skillAnimate = {
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

const Skill = () => {
    return (
        <SkillStyle as={motion.section} 
        initial="initial" 
        animate="animate" 
        exit="exit"
        variants={skillAnimate}>
            <SectionHeading isSecondary>SKILL</SectionHeading>
            <p className="skill_subheading">Click or hover any to know the percentage</p>
            {skills.map((skill, index) => {
                return <PercentageDisplayer
                key={skill.percentage + index}
                title={skill.title}
                percentage={skill.percentage}>
                    {skill.title}
                </PercentageDisplayer>
            })}
        </SkillStyle>
    )
}

export default Skill