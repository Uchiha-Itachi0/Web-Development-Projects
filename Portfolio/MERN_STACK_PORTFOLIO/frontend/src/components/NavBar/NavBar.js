import React, { useState } from 'react'
import ReactStaggerNavbar from '../ReactStaggerNavbar.js/ReactStaggerNavbar'
import { Link } from "react-router-dom"
import NavItemContainer from './NavBarStyle'
import MovingTextContainer from '../ReactHoverMovingTextContainer/MovingTextContainer'
const NavBar = () => {

    const [toggle, setMenuToggle] = useState(false);

    const handleMenuToggle = () => setMenuToggle(!toggle)
    return (
        <>
            <ReactStaggerNavbar
                backgroundColor="transparent"
                padding="1em 1.5em"
                isLogoImg={false}
                logoHeading="AS"
                minLogoFontSize="2vw"
                maxLogoFontSize="3em"
                logoColor="#324235"
                logoAfterColor="#FFF6E6"
                minBurgerContainerSize="2vw"
                maxBurgerContainerSize="3em"
                burgerMenuBarColor="#324235"
                burgerMenuBarAfterColor="#FFF6E6"
                staggerColor="#324235"
                toggle={toggle}
                setMenuToggle={setMenuToggle}
            >
                <NavItemContainer>
                    <MovingTextContainer
                        movingTextWallperColor="#FFF6E6"
                        movingTextColor="#324235"
                        movingTextMargin="0 0 2em 0"
                        movingTextText="JUST TAKE ME HOME"
                        movingTextFontWeight="900">
                        <Link to="/" className="nav_item_link" onClick={handleMenuToggle}>Home</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        movingTextWallperColor="#FFF6E6"
                        movingTextColor="#324235"
                        movingTextMargin="0 0 2em 0"
                        movingTextText="KNOW ME"
                        movingTextFontWeight="900">
                        <Link to="/about" className="nav_item_link" onClick={handleMenuToggle}>About</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        movingTextWallperColor="#FFF6E6"
                        movingTextColor="#324235"
                        movingTextMargin="0 0 2em 0"
                        movingTextText="WHAT I LIKE"
                        movingTextFontWeight="900">
                        <Link to="/interest" className="nav_item_link" onClick={handleMenuToggle}>Interest</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        movingTextWallperColor="#FFF6E6"
                        movingTextColor="#324235"
                        movingTextMargin="0 0 2em 0"
                        movingTextText="KEEP LEARNING"
                        movingTextFontWeight="900">
                        <Link to="/skill" className="nav_item_link" onClick={handleMenuToggle}>Skill</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        movingTextWallperColor="#FFF6E6"
                        movingTextColor="#324235"
                        movingTextMargin="0 0 2em 0"
                        movingTextText="SEE MY WORK"
                        movingTextFontWeight="900">
                        <Link to="/projects" className="nav_item_link" onClick={handleMenuToggle}>Project</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        movingTextWallperColor="#FFF6E6"
                        movingTextColor="#324235"
                        movingTextMargin="0 0 2em 0"
                        movingTextText="SEND ME MAIL"
                        movingTextFontWeight="900">
                        <Link to="/contact" className="nav_item_link" onClick={handleMenuToggle}>Contact</Link>
                    </MovingTextContainer>
                </NavItemContainer>

            </ReactStaggerNavbar>
        </>
    )
}

export default NavBar