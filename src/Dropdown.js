import React from 'react';
import './dropdown.css';
const Dropdown = () => {
  const list1 = [{ name: 'Gold' }, { name: 'Silver' }];
  const list2 = [{ name: 'Diamond' }, { name: 'Platinum' }];
  const list3 = [{ name: 'All' }, { name: 'None' }];
  const items = [...list1, ...list2, ...list3];
  return (
    <div>
      <p className="heading">Please select an option</p>
      <select className="dropdown">
        {items.map((data) => {
          return <option className="options">{data.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
