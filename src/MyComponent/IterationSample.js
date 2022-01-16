import React from 'react';

const MyComponent = () => {
  const names = ['snowman', 'ice', 'snow', 'wind']
  const nameList = names.map(name => {
    return <li key={Math.random()}>{name}</li>
  })

  return (
    <div>
      {nameList}
    </div>
  );
};

export default MyComponent;
