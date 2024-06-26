import React, { useState } from "react";
import SynonymsAntonyms from "./SynonymsAntonyms";
import "./Definitions.css";

export default function Meanings(props) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, idx) => {
        if (!showAll && idx >= 3) return null; // Hide definitions beyond the first 3 if not showing all
        return (
          <div key={idx} className="definition">
            <ul>
              <li>
                <strong>Definition:</strong> {definition.definition}
              </li>
              <li className="definition-synonyms-antonyms">
              <SynonymsAntonyms
                synonyms={definition.synonyms}
                antonyms={definition.antonyms}/>
              </li>
                {definition.example && (
                <li>
                  <p className="m-0 p-0">
                    Example: <em> {definition.example}</em>
                  </p>
                </li>
              )}
            </ul>
          </div>
        );
      })}
      {!showAll && props.meaning.definitions.length > 3 && (
        <ul>
        <button onClick={toggleShowAll} className=" view-more-btn">
          View More Definitions
        </button>
        </ul>
      )}
      {showAll && (
        <ul>
        <button onClick={toggleShowAll} className="  view-more-btn">
          View Less Definitions
        </button>
        </ul>
      )}
      <SynonymsAntonyms
        synonyms={props.meaning.synonyms}
        antonyms={props.meaning.antonyms}
      />
    </div>
  );
}
