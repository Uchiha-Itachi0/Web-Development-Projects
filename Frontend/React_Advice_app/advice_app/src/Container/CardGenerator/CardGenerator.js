import React, { useEffect, useState } from 'react'
import Card from '../../Component/Card/Card'
import Heading from '../../Component/Heading/Heading'
import axios from "../../axios/axios"

const CardGenerator = (props) => {

  const [advice, setAdvice] = useState("");
  useEffect(() => {
    axios.get("/advice")
      .then(response => {
        setAdvice(response.data.slip.advice);
      })
      .catch(err => console.log(err));
  }, []);



  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Heading />
        <Card mainContent={advice} />
    </div>
  )
}

export default CardGenerator