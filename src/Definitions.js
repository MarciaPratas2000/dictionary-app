import React, { useState } from "react";
import axios from "axios";
import './Definitions.css';
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Definitions.css";

export default function Definitions(props) {
  const [meanings, setMeanings] = useState(null);
  const [phonetics, setPhonetics] = useState([]);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);

  function apiCall() {
    if (!props.searchTerm) return;

    setLoading(true);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.searchTerm}`;
    axios
      .get(url)
      .then(function (response) {
        handleResponse(response.data[0]);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
        clearResults();
      })
      .finally(function () {
        setLoading(false);
      });
  }

  function handleResponse(data) {
    setMeanings(data.meanings);
    setPhonetics(data.phonetics);
    setWord(data.word);
  }

  function clearResults() {
    setMeanings(null);
    setPhonetics([]);
    setWord("");
  }

  if (props.searchTerm && !loading && word !== props.searchTerm) {
    apiCall();
  }

  return (
    <div className=" container-fluid definitions-container">
    {loading && <p>Loading...</p>}
    {!loading && !meanings && <p>Please enter a search term</p>}
    {meanings && (
      <div>
        <h2>Definitions for <strong> <u>{word} </u> 📝</strong></h2>
          <Phonetics phonetics={phonetics} />
          <div className="meanings">
            {meanings.map((meaning, index) => (
              <Meanings key={index} meaning={meaning} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
