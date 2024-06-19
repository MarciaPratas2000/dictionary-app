import React, { useState } from "react";
import axios from "axios";
import './Definitions.css';

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
          <h2>Definitions for "{props.searchTerm}"</h2>
          {phonetics && phonetics.length > 0 && (
            <div className="phonetics">
              <h3>Phonetics</h3>
              <ul>
                {phonetics.map(function (phonetic, index) {
                  return (
                    <li key={index}>
                      {phonetic.text && (
                        <p>
                          Text: {phonetic.text}{" "}
                          {phonetic.audio && (
                            <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
                              Listen
                            </a>
                          )}
                        </p>
                      )}
                      {phonetic.audio && !phonetic.text && (
                        <p>
                          Audio:{" "}
                          <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
                            Listen
                          </a>
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="  meanings">
            {meanings.map(function (meaning, index) {
                //meanings is an object with sub-objects (meaning ). Meaning is also an object with sub-objects.
              return (
                <div key={index} className="meaning">
                  <h3>{meaning.partOfSpeech}</h3>
                  {meaning.definitions.map(function (definition, idx) {
                    //meanings is an object with sub-objects (meaning). definition is a sub-onject of meaning
                    return (
                      <div key={idx} className="definition">
                        <p>
                          <strong>Definition:</strong> {definition.definition}
                        </p>
                        {definition.example && (
                          <p>
                            <strong>Example:</strong> {definition.example}
                          </p>
                        )}
                        {definition.synonyms.length > 0 && (
                          <p>
                            <strong>Synonyms:</strong> {definition.synonyms.join(", ")}
                          </p>
                        )}
                        {definition.antonyms.length > 0 && (
                          <p>
                            <strong>Antonyms:</strong> {definition.antonyms.join(", ")}
                          </p>
                        )}
                      </div>
                    );
                  })}
                  {meaning.synonyms.length > 0 && (
                    <p>
                      <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
                    </p>
                  )}
                  {meaning.antonyms.length > 0 && (
                    <p>
                      <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
