import React, { useState } from 'react';
import './text.css';
const Text = () => {
  const [index, setIndex] = useState([0]);
  const text = [
    { name: 'Color changed to green' },
    { name: 'Color is red' },
    { name: 'Text color blue' },
  ];

  const handleClick = () => {
    setIndex(index + 1);
  };

  let randomText = text[Math.floor(Math.random() * text?.length)];

  let randomLastWord = randomText.name.split(' ');
  let slicedText = randomLastWord.slice(-randomLastWord, -1).join(' ');

  let lastWord = randomLastWord[randomLastWord.length - 1];
  const changeColor = () => {
    switch (lastWord) {
      case 'green':
        return 'green';
      case 'red':
        return 'red';
      case 'blue':
        return 'blue';
      default:
    }
  };
  return (
    <div>
      <span>{slicedText} &nbsp; </span>
      <span className={changeColor()}>{lastWord} &nbsp; </span>
      <button onClick={handleClick}>Click to change text color</button>
    </div>
  );
};
export default Text;
