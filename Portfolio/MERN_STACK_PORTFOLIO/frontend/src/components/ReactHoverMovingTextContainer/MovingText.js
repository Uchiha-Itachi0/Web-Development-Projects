import React from 'react'
import { ParaContainer, MovingText1, Wallpaper } from './MovingTextStyle'
import { motion } from 'framer-motion'
const MovingText = (props) => {


  const text1 = {
    initial: {
      x: "0"
    },
    animate: {
      x: "-100%",
      transition: {
        duration: 5,
        repeat: Infinity,
        type: "tween",
        ease: "linear"
      }
    }
  }

  const text2 = {
    initial: {
      x: "0"
    },
    animate: {
      x: "-100%",
      zIndex: 100,
      transition: {
        duration: 5,
        repeat: Infinity,
        type: "tween",
        ease: "linear",
        delay: 2.5
      }
    }
  }

  const paraCotnainer = {
    initial: {
      height: 0,
      transition: {
        duration: .5
      }
    },
    animate: {
      height: "max-content",
      transition: {
        duration: .5
      }
    }
  }

  const hoverContainer = {
    initial: {
      ...paraCotnainer.initial
    },
    animate: {
      ...paraCotnainer.animate,
      height: "auto"
    }
  }
  return (
    <>
      <Wallpaper
        as={motion.div}
        initial="initial"
        animate={props.showMovingText ? "animate" : "initial"}
        variants={hoverContainer}
        wallpaperColor={props.wallpaperColor}
      />
      <ParaContainer
        as={motion.p}
        initial="initial"
        animate={props.showMovingText ? "animate" : "initial"}
        variants={paraCotnainer}
        minFontSize={props.minFontSize}
        maxFontSize={props.maxFontSize}
        movingTextColor={props.movingTextColor}
        movingTextFontWeight={props.movingTextFontWeight}
      >
        <MovingText1 className={props.edit}
          as={motion.span}
          variants={text1}
          initial="initial"
          animate="animate">
          {props.movingTextText}
        </MovingText1>
      </ParaContainer>
      <ParaContainer
        as={motion.p}
        initial="initial"
        animate={props.showMovingText ? "animate" : "initial"}
        variants={paraCotnainer}
        minFontSize={props.minFontSize}
        maxFontSize={props.maxFontSize}
        movingTextColor={props.movingTextColor}
        movingTextFontWeight={props.movingTextFontWeight}

      >
        <MovingText1 className={props.edit}
          as={motion.span}
          variants={text2}
          initial="initial"
          animate="animate">
          {props.movingTextText}
        </MovingText1>
      </ParaContainer>
    </>
  )
}

export default MovingText