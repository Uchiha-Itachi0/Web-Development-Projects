import React from 'react'
import HomeStyle from './HomeStyle'
import MyImg from "../../assets/images/myImg.jpg"
import CircularRotatingImg from '../../components/CircularRotatingImg/CircularRotatingImg'
import styled from 'styled-components'
import TwoCircleButton from '../../components/TwoCircleButton/TwoCircleButton'

const ModifiedCircularRotatingImg = styled(CircularRotatingImg)`
position: absolute;
right: 5%;
bottom: 0%;
@media screen and (max-width: 854px) {

  width: 35vw;
  height: 35vw;
}

@media screen and (max-width: 488px) {
  bottom: 25%;
}

`;


const Home = () => {
  return (
    <>
      <HomeStyle backgroundImg={MyImg}>
        <div className="home_img_container"></div>
        <div className="home_small_heading_container">
          <h1>I am <span>FullStack Developer</span></h1>
        </div>
        <ModifiedCircularRotatingImg
          minSize="15vw"
          maxSize="100px"
        />
        <div className="home_big_name_container">
          <h1>ANUBHAV</h1>
          <h1>SHUKLA</h1>
        </div>
      </HomeStyle>
      <TwoCircleButton />
    </>

  )
}

export default Home