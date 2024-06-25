import React from "react";
import SynonymsAntonyms from "./SynonymsAntonyms";
import "./Definitions.css";


export default function Meanings(props) {
  return (
    <div className="meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, idx) => {
        return (
          <div key={idx} className="definition">
            <ul>
            <li>
              <strong>Definition:</strong> {definition.definition}
            </li>
            {definition.example && (
              <li>
                <p>
                <em>Example: {definition.example}</em>
                </p>
              </li>
            )}
            {definition.synonyms.length > 0 && (
              <li>
                <strong>Synonyms:</strong> {definition.synonyms.join(", ")}
              </li>
            )}
            {definition.antonyms.length > 0 && (
              <li>
                <strong>Antonyms:</strong> {definition.antonyms.join(", ")}
              </li>
            )}
            </ul>
          </div>
        );
      })}
      <SynonymsAntonyms
        synonyms={props.meaning.synonyms}
        antonyms={props.meaning.antonyms}
      />
    </div>
  );
}

