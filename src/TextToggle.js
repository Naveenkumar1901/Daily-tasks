import React, { useState } from 'react';

const TextToggle = () => {
  const [showText, setShowText] = useState([]);

  return (
    <>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        {showText ? 'Hide text below' : 'Show text below'}
      </button>
      {showText && <div>Click to hide text</div>}
    </>
  );
};

export default TextToggle;
