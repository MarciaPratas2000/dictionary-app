import React, { useState } from "react";
import "./Dictionary.css"; // Import custom CSS file


export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with search term:", searchTerm);
    setSearchTerm("");
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="dictionary">
    <form className="container" onSubmit={handleSubmit}>
      <span className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={handleChange}
          autofocus={false}
        />
        <button type="submit" className="btn btn-model">Search</button>
      </span>
    </form>
    </div>
  );
}
