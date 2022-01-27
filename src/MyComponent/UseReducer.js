import React, {useReducer, useState} from 'react';

function reducer (state, action) {
  if(action.type === 'increment') {
    return { count: state.count + 1 }
  } else if (action.type === 'decrement') {
    return { count: state.count - 1 }
  } else {
    return state
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  // const [count, setCount] = useState(0)

  const decrement = () => {
    dispatch({ type: 'decrement' })
  }

  const increment = () => {
    dispatch({ type: 'increment' })
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{ state }</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseReducer;
