import React, { useState } from 'react';

const DisableButton = () => {
  const [view, setView] = useState([]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setView(e.target.value);
        }}
      />
      {'  '}
      &nbsp;
      <button disabled={view.length < 1}>Submit</button>
    </>
  );
};
export default DisableButton;
