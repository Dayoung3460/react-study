import React, {useEffect, useReducer, useState} from 'react';
import useInputs from './useInput'
// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   }
// }

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  })

  const {name, nickname} = state

  // const onChange = e => {
  //   dispatch(e.target)
  // }

  return (
    <div>
      <input
        name="name"
        value={ name }
        onChange={ onChange }
      />
      <input
        name="nickname"
        value={ nickname }
        onChange={ onChange }
      />
      <div>
        <div>
          <b>name:</b>{ name }
        </div>
        <div>
          <b>nickname:</b>{ nickname }
        </div>
      </div>
    </div>
  );
};

export default Info;
