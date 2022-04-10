import styled from "styled-components";

const AboutStyle = styled.div`
margin-top: 5em;
padding: 2em 2em;

    .about_content{
        font-size: max(3vw, 15px);
        color: var(--secondary);
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 1.5em;
    }

    .about_footer{
        margin-top: 2em;
        margin-bottom: 2em;
        font-size: max(2.7vw, 15px);
        color: var(--secondary);
        font-weight: 600;

    }

    .about_link{
        font-size: max(3vw, 15px);
        color: var(--secondary);
        font-weight: 600;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            background: var(--secondary);
            width: 0%;
            height: 10%;
            bottom: 0;
            transition: 500ms;
        }

        &:hover {
            &::before{
            width: 100%;
        }
        }
    }

@media only screen and (max-width: 550px){
    padding: 2em 1em;
    .about_content{
        font-size: 6vw;
    }

    .about_footer{
        font-size: 5vw;
    }
}

`;

export default AboutStyle;