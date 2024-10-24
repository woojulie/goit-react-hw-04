import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setShowError(true);
      return;
    }
    setShowError(false);
    onSubmit(input);
    setInput("");
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <header>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search images and photos"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
      {showError && <ErrorMessage onClose={handleCloseError} />} {}
    </header>
  );
}

export default SearchBar;
