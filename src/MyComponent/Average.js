import React, {useMemo, useState} from 'react';

const getAverage = numbers => {
  console.log('calculating average number')
  if(numbers.length === 0) {
    return 0
  }
  const sum = numbers.reduce((a, b) => {
    return a + b
  })
  return sum / numbers.length
}

const Average = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')

  const onChange = e => {
    setNumber(e.target.value)
  }

  const onInsert = () => {
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    setNumber('')
  }

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={onChange}
      />
      <button
        onClick={onInsert}
      >
        Add
      </button>
      <ul>
        { list.map((value, idx) => (
           <li key={idx}>{ value }</li>
        )) }
      </ul>
      <div>
        <b>Average: </b>{ avg }
      </div>
    </div>
  );
};

export default Average;
