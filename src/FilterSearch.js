import React, { useState } from 'react';
import './filterSearch.css';
const FilterSearch = () => {
  const items = ['Gold', 'Silver', 'DIAMOND', 'platinum', 'Brass'];
  const [search, setSearch] = useState('');
  const [values, setValues] = useState('');
  const [err, setErr] = useState(false);
  const handleSearch = (e) => {
    let input = e.target.value;
    setValues(input);
  };
  const clickSearch = () => {
    let filteredSearch = items.filter((eachItem) =>
      eachItem.toLowerCase().includes(values.toLowerCase())
    );
    values.length < 1 ? values.preventDefault() : setSearch(filteredSearch);
    if (filteredSearch !== values) {
      setErr(true);
    }
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1>Search for items</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            FilterSearch();
          }}
        >
          <input type="text" onChange={handleSearch} /> &nbsp;
          <button onClick={clickSearch}>Search</button>
        </form>
        <div>
          {search
            ? search &&
              search.map((data, index) => {
                return (
                  <button key={index} className="result-item">
                    {data}
                  </button>
                );
              })
            : ''}
        </div>
        {err && <p>No item found!</p>}
      </div>
    </div>
  );
};

export default FilterSearch;
