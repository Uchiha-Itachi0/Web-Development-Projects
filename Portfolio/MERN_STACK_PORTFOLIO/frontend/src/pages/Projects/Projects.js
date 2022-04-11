import React, { useState } from 'react'
import ProjectStyle from './ProjectsStyle'
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import SearchInput from '../../components/SearchInput/SearchInput'
import Tag from '../../components/Tag/Tag'
import ProjectCard from '../../components/ProjectCard.js/ProjectCard'
import { motion } from 'framer-motion'

const data = [
    {
        title: "Snake Game",
        description: "A simple snake game build with python",
        number: "01",
        tag: ["PYTHON", "GAME", "TURTLE", "OOP"]

    },
    {
        title: "Flasher",
        description: "Effective way to learn something. Flasher is based upon flash card technique",
        number: "02",
        tag: ["PYTHON", "GAME", "TKINTER"]
    },
    {
        title: "Advice App",
        description: "A simple web app with eye catching animation and UI/UX that generate random advices",
        number: "03",
        tag: ["REACT", "WEB DEVELOPMENT", "UI", "UX", "WEB APP", "ANIMATION"]
    },
]
// Initialy the selected tag will be an empty array
const selectedTag = [];

const tags = ["PYTHON", "REACT", "FRONTEND", "BACKEND", "FULLSTACK"]


const projectAnimate = {
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
const Projects = () => {


    const [searchValue, setSearchValue] = useState("")

    const [filterData, setFilterData] = useState(data);

    const inputChangeHandler = (value) => {

        setSearchValue(value);

        // Check for title
        const updatedFilterData = data.filter(data => {

            if (data.title.toLowerCase().includes(value.toLowerCase())) {
                return data.title.toLowerCase().includes(value.toLowerCase())
            }
            else if (data.number.toLowerCase().includes(value.toLowerCase())) {
                return data.number.toLowerCase().includes(value.toLowerCase())
            }
            return data.tag.includes(value.toUpperCase())
        })
        setFilterData(updatedFilterData);

    }


    const tagClickHandler = (tag) => {
        const clickedTag = tag.toUpperCase();
        // Check that if the selectedTag array is empty then we have to display the entire data

        // Check to see that if the selected tag is selected again then we have to diable that tag
        // which means we have to remove the data related to that tag
        if (selectedTag.includes(clickedTag)) {
            const tagIndex = selectedTag.indexOf(clickedTag);
            selectedTag.splice(tagIndex, 1);
        }
        else {
            selectedTag.push(clickedTag);
        }

        if (selectedTag.length <= 0) {
            return setFilterData(data)
        }

        // Displaing the data from the selectedTag
        // Here some property of an array comes very handy.
        const updateData = data.filter(value => selectedTag.some(tag => value.tag.includes(tag)));
        setFilterData(updateData);
    }
    return (
        <ProjectStyle as={motion.section} 
        initial="initial" 
        animate="animate"
        exit="exit"
        variants={projectAnimate}>
            <SectionHeading isSecondary>PROJECTS</SectionHeading>
            <SearchInput inputchange={(value) => inputChangeHandler(value)} value={searchValue} />
            <div className="project_tags">
                {tags.map((tag, index) => {
                    return <Tag
                        handleclick={() => tagClickHandler(tag)}
                        key={index}
                    >{tag}
                    </Tag>
                })}
            </div>
            <div className="project_project_container">
                {filterData.map((value, index) => {
                    return <ProjectCard key={index}
                        project_title={value.title}
                        project_desc={value.description}
                        project_number={value.number}
                        button_link={"https://github.com/"}
                    />
                        
                })}
            </div>



        </ProjectStyle>
    )
}

export default Projects