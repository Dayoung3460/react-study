import React, {useState} from 'react';

const MyComponent = () => {
  const [name, setNames] = useState([
    {id: 1, text: 'snowman'},
    {id: 2, text: 'ice'},
    {id: 3, text: 'snow'},
    {id: 4, text: 'wind'}
  ])

  const [input, setInput] = useState('')
  const [nextId, setNextId] = useState(5)
  const nameList = name.map((name, idx) => {
    return <li key={name.id}>{name.text}</li>
  })

  const onChange = e => {
    setInput(e.target.value)
  }

  const onClick = () => {
    setNames([
      ...name,
      { id: nextId, text: input }
    ])
    setNextId(nextId + 1)
    setInput('')
  }

  return (
    <div>
      <input
        value={input}
        onChange={onChange}
      />
      <button onClick={onClick}>Add</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default MyComponent;
