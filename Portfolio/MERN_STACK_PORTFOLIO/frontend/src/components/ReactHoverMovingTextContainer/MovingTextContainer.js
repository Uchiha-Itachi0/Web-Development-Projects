/* 
----------------------Props----------------------
containerBackgroundColor
wallpaperColor
minFontSize
maxFontSize
movingTextColor
movingTextText

Want to increase the padding of the moving text

const ModifiedMovingTextContainer = styled(MovingTextContainer)`
@media only screen and (max-width: 450px){
  padding-left: 120%;
}
@media only screen and (max-width: 350px){
  padding-left: 150%;
}
@media only screen and (max-width: 280px){
  padding-left: 250%;
}

now use ModifiedMovingTextContainer
*/

import React, { useState } from 'react'
import MovingText from './MovingText'
import { Container } from './MovingTextStyle'

const MovingTextContainer = ({
  movingTextContainerBackgroundColor="transparent",
  movingTextMargin="0 0 1.5em 0",
  children,
  movingTextWallperColor="blue",
  movingTextMinFontSize="5vw",
  movingTextMaxFontSize="50px",
  movingTextColor="red",
  movingTextText="Just take me home",
  movingTextFontWeight="300",
  className

}) => {

    const [showMovingText, setShowMovingText] = useState(false)

    const handleMouseEnter = () => setShowMovingText(true)
    const handleMouseLeave = () => setShowMovingText(false)
    return (
        <Container onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            containerBackgroundColor={movingTextContainerBackgroundColor} 
            margin = {movingTextMargin}>
            {children}
            <MovingText
                wallpaperColor={movingTextWallperColor}
                minFontSize={movingTextMinFontSize}
                maxFontSize={movingTextMaxFontSize}
                movingTextColor={movingTextColor}
                showMovingText={showMovingText}
                movingTextText={movingTextText} 
                edit = {className}
                movingTextFontWeight={movingTextFontWeight}
            />
        </Container>
    )
}

export default MovingTextContainer