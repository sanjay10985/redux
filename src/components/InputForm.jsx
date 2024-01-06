import React from 'react'
import { useDispatch } from 'react-redux';
import { setInputText } from '../reducers/textReducer';

const InputForm = () => {
    const dispatch = useDispatch();
    const handleInput = (event) => {
      const newText = event.target.value;
      dispatch(setInputText(newText));
    }

  return (
    <div>
        <input type="text" onChange={handleInput}/>
    </div>
  )
}

export default InputForm