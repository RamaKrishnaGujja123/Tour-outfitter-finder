import React, { useState } from 'react';

const AdvancedSearchFilters = ({ onFilterChange }) => {
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [groupSize, setGroupSize] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ difficulty, duration, groupSize });
  };

  return (
    <div className="advanced-search-filters">
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">All Difficulty Levels</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input
        type="number"
        placeholder="Max Duration (hours)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Group Size"
        value={groupSize}
        onChange={(e) => setGroupSize(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default AdvancedSearchFilters;