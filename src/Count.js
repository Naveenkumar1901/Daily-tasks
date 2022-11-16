import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>{' '}
      &nbsp;
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Count;
