import React, {useState} from 'react';

const MyComponent = () => {
  const [msg, setMsg] = useState('')
  const onClickEnter = () => setMsg('hi')
  const onClickLeave = () => setMsg('bye')

  const [color, setColor]= useState('black')

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <p style={{color: color}}>{ msg }</p>
      <button style={{color: 'red'}} onClick={() => setColor('red')}>red</button>
      <button style={{color: 'green'}} onClick={() => setColor('green')}>green</button>
      <button style={{color: 'blue'}} onClick={() => setColor('blue')}>blue</button>
    </div>
  );
};

export default MyComponent;
