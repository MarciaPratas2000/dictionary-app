import React, { useState } from "react";
import "./Dictionary.css"; // Import custom CSS file
import Definitions from "./Definitions"; // Assuming this is your Definitions component

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [previousSearchTerm, setPreviousSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); // Set submitted to true when form is submitted
    setPreviousSearchTerm(searchTerm); // Store the current searchTerm as previousSearchTerm
    // You can add additional logic here, such as fetching data based on searchTerm
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSubmitted(false); // Reset submitted state when input changes
  };

  // Define the form JSX within a variable
  const form = (
    <form className="dictionary container-fluid align-center m-2" onSubmit={handleSubmit}>
      <span className="input-group m-2">
        <input
          type="search"
          className="form-control"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={handleChange}
          autoFocus={false} // autoFocus corrected to lowercase
        />
        <button type="submit" className="btn btn-model">
          Search
        </button>
      </span>
    </form>
  );

  // Conditionally render Definitions component based on 'submitted' state and searchTerm not being empty
  return (
    <div>
      {form}
      {submitted && searchTerm && <Definitions searchTerm={searchTerm} />}
      {!submitted && <Definitions searchTerm={previousSearchTerm} />}

    </div>
  );
}
