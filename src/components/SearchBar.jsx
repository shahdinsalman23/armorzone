// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import allProducts from '../constant/allProducts';

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = allProducts.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    }
  };

  const handleSelect = (product) => {
    setQuery('');
    setSuggestions([]);
    navigate(`/productdetail/${product.id}`);
    if (onClose) onClose(); // searchbar close after navigation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-icon-btn">
          <FiSearch size={20} />
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
