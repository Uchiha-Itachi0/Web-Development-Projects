import React from 'react'
import BurgerMenu from '../ReactBurgerMenu/BurgerMenu'
import { LogoContainer, NavContainer, LogoHeading, NavMenuItem, StaggerDiv, StaggerDivChildren } from './ReactStaggerNavbarStyle'
import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const navItem = {
    initial: {
        y: "-200vh",
        transition: {
            duration: .5,
        }
    },
    animate: {
        y: 0,
        transition: {
            duration: .5,
            delay: .5
        }
    }
}

const staggerDiv = {
    initial: {
        y: "-100vh",
        transition: {
            delay: .5,
            duration: .5,
            staggerChildren: .1
        }
    },
    animate: {
        y: 0,
        transition: {
            duration: .5,
            staggerChildren: .1
        }
    }
}

const staggerDivChildren = {
    initial: {
        y: "-100vh",
        transition: {
            duration: .5
        }
    },
    animate: {
        y: 0,
        transition: {
            duration: .5
        }
    }
}


const ReactStaggerNavbar = ({
    backgroundColor = "#3ebfff",
    padding = "2em",
    minLogoSize = "5vw",
    maxLogoSize = "50px",
    logoBackgroundImg,
    logoBackgroundSize = "contain",
    isLogoImg = true,
    logoHeading = "Logo",
    logoColor = "black",
    logoAfterColor = "black",
    minLogoFontSize = "5vw",
    maxLogoFontSize = "50px",
    minBurgerContainerSize = "5vw",
    maxBurgerContainerSize = "50px",
    burgerContainerColor = "transparent",
    burgerMenuBarHeight = "10%",
    burgerMenuBarColor = "#000",
    burgerMenuBarAfterColor = "#000",
    staggerColor = "yellow",
    children,
    toggle,
    setMenuToggle
}) => {


    return (
        <>
            <NavContainer
                backgroundColor={backgroundColor}
                padding={padding}>
                {isLogoImg ? <LogoContainer
                    minLogoWidth={minLogoSize}
                    maxLogoWidth={maxLogoSize}
                    logoBackgroundImg={logoBackgroundImg}
                    logoBackgroundSize={logoBackgroundSize}
                /> :
                    <LogoHeading
                        logoColor={toggle ? logoAfterColor : logoColor}
                        minLogoFontSize={minLogoFontSize}
                        maxLogoFontSize={maxLogoFontSize}>{logoHeading}</LogoHeading>}
                <BurgerMenu
                    minBurgerContainerSize={minBurgerContainerSize}
                    maxBurgerContainerSize={maxBurgerContainerSize}
                    burgerContainerColor={burgerContainerColor}
                    burgerMenuBarHeight={burgerMenuBarHeight}
                    burgerMenuBarColor={burgerMenuBarColor}
                    burgerMenuBarAfterColor={burgerMenuBarAfterColor}
                    toggle={toggle}
                    setMenuToggle={setMenuToggle}
                />
            </NavContainer>

            <NavMenuItem
                as={motion.div} variants={navItem}
                initial="initial"
                animate={toggle ? "animate" : "initial"}>
                {children}
            </NavMenuItem>

            <StaggerDiv
                as={motion.div}
                variants={staggerDiv}
                initial="initial"
                animate={toggle ? "animate" : "initial"}>
                <StaggerDivChildren
                    staggerColor={staggerColor}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={staggerColor}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={staggerColor}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={staggerColor}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={staggerColor}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
            </StaggerDiv>
        </>
    )
}

ReactStaggerNavbar.propTypes = {
    backgroundColor: PropTypes.string,
    padding: PropTypes.string,
    minLogoSize: PropTypes.string,
    maxLogoSize: PropTypes.string,
    logoBackgroundImg: PropTypes.string,
    logoBackgroundSize: PropTypes.string,
    isLogoImg: PropTypes.bool,
    logoHeading: PropTypes.string,
    logoColor: PropTypes.string,
    minLogoFontSize: PropTypes.string,
    maxLogoFontSize: PropTypes.string,
    minBurgerContainerSize: PropTypes.string,
    maxBurgerContainerSize: PropTypes.string,
    burgerContainerColor: PropTypes.string,
    burgerMenuBarHeight: PropTypes.string,
    burgerMenuBarColor: PropTypes.string,
    staggerColor: PropTypes.string,
}

export default ReactStaggerNavbar