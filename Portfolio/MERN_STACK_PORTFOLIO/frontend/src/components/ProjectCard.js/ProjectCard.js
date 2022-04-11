import React from 'react'
import ProjectCardContainer from "./ProjectStyle"
import TwoCircleButton from "../TwoCircleButton/TwoCircleButton"
import styled from "styled-components"

const ModifiedTwoCircleButton = styled(TwoCircleButton)`
    a{
      font-size: max(2vw, 15px);
    }
    .circle_button{
        width: 20vw;
        height: 10vw;
    }

@media only screen and (max-width: 600px){
    a{
        font-size: 3vw;
    }
    .circle_button{
        width: 30vw;
        height: 15vw;
    }
}
`;
const ProjectCard = ({project_title, project_desc, project_number,button_link}) => {
  return (
    <ProjectCardContainer>
      <h1 className="project_number">{project_number}</h1>
        <h1 className="project_card_heading">{project_title}</h1>
        <h2 className="project_card_desc">{project_desc}</h2>
        <ModifiedTwoCircleButton link={button_link} text="READ MORE"/>
    </ProjectCardContainer>
  )
}

export default ProjectCard