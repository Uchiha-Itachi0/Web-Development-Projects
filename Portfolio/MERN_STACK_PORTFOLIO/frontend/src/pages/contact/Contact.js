import React from "react";
import ContactStyle from "./ContactStyle";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MovingTextContainer from "../../components/ReactMovingTextContainer/MovingTextContainer"
import styled from "styled-components";

const ModifiedMovingTextContainer = styled(MovingTextContainer)`

@media only screen and (max-width: 336px){
    padding-left: 150%;
}
`;
const Contact = (props) => {
    return (
        <ContactStyle>
            <div className="contact">
                <h1 className="contact_heading_1">REACH OUT</h1>
                <a href="mailto:anubhav008shukla@gmail.com" className="contact_mail">anubhav008shukla@gmail.com</a>
                <div className="contact_social_icon">
                    <a href="https://github.com/Uchiha-Itachi0"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/anubhav008shukla/"><LinkedInIcon /></a>
                    <a href="https://www.instagram.com/anubhav008shukla/"><InstagramIcon /></a>
                    <a href="https://twitter.com/Anubhav08Shukla"><TwitterIcon /></a>
                </div>
                <div className="contact_menu_link">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/interest">Interest</Link>
                    <Link to="/skill">Skill</Link>
                    <Link to="/projects">Project</Link>
                </div>
            </div>
            <div className="contact_moivng_text_footer">
                <ModifiedMovingTextContainer
                    movingTextText="X Design and Built by Anubhav Shukla X"
                    minFontSize="2vw"
                    maxFontSize="16px"
                    movingTextColor="#324235"
                    movingTextFontWeight="500"
                />
            </div>
        </ContactStyle>
    )
}

export default Contact