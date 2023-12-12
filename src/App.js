import React, { useState } from 'react';
import Select from 'react-select';

const countries = [
  { value: 'usa', label: 'United States' },
  { value: 'china', label: 'China' },
  { value: 'peru', label: 'Peru' },
  {value: 'iran', label: 'Iran'},
  {value: 'england', label: 'England'},
  {value: 'india', label: 'India'},
];

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div>
      <h3>Select a Country:</h3>
      <Select
        value={selectedCountry}
        onChange={handleChange}
        options={countries}
        isSearchable
        placeholder="Search for a country..."
      />
      {selectedCountry && (
        <div>
          <h4>Selected Country:</h4>
          <p>{selectedCountry.label}</p>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
