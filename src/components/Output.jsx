import React from 'react'
import {useSelector} from 'react-redux'


const Output = () => {
  const text = useSelector((state) => state.text.text);
  console.log(text);
  return (
    <div>{text}</div>
  )
}

export default Output