import React from 'react'
import TwoCircleButtonStyle from './TwoCircleButtonStyle'

const TwoCircleButton = () => {
  return (
    <TwoCircleButtonStyle>
        <a href='mailto:anubhav008shukla@gmail.com' class="hire_me_button">HIRE ME</a>
        <div className="circle_button circle_1"></div>
        <div className="circle_button circle_2"></div>
    </TwoCircleButtonStyle>
  )
}

export default TwoCircleButton