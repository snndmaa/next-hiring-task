import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import ClassicButton from '../button/ClassicButton';


const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', query);
  };

  return (
    <div className="w-full max-w-lg ml-5">
      <form onSubmit={handleSearch} className="relative flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <FaSearch 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20}
        /> */}
        <ClassicButton
          className=''

        >
          <FaSearch

          />
        </ClassicButton>
      </form>
      
      {suggestions.length > 0 && (
        <div className="absolute mt-1 w-full max-w-lg bg-white border rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;