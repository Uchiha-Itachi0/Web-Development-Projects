import React from 'react'
import DisplayPercentWithTitle from "./PercentageDisplayerStyle";

const PercentageDisplayer = ({
    children,
    title,
    percentage
}) => {
  return (
    <DisplayPercentWithTitle 
    title={title} 
    percentage={percentage}>{children}</DisplayPercentWithTitle>
  )
}

export default PercentageDisplayer