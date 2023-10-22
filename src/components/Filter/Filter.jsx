import React from 'react';
const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      placeholder="Search your contact"
      value={filter}
      onChange={e => onFilterChange(e.target.value)}
    />
  );
};
export default Filter;