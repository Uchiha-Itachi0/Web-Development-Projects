import styled from "styled-components";

const NavItemContainer = styled.div`
width: 100vw;
/* height: max-content; */
text-align: center;
padding-top: 2em;
    .nav_item_link{
        font-size: max(5vw, 50px);
        color: #FFF6E6;
        border-top: 1px solid #FFF6E6;
        border-bottom: 1px solid #FFF6E6;
        width: 100vw;
        display: block;
        position: relative;
        z-index:1;
    }

`;

export default NavItemContainer;