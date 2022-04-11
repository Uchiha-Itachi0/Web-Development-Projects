import styled from "styled-components";

const TagContainer = styled.div`
width: max-content;
padding: 1em;
border: 2px solid var(--secondary);
background: ${props => props.toggle ? 'var(--secondary)' : 'transparent'};
color: ${props => props.toggle ? 'var(--primary)' : 'var(--secondary)'};
cursor: pointer;
font-size: max(2vw, 20px);
`;

export default TagContainer;