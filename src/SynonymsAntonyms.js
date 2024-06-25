import React from "react";
import "./Definitions.css";


export default function SynonymsAntonyms(props) {
  return (
    <div className="synonyms-antonyms">
      <ul>
      <li>   
      {props.synonyms.length > 0 && (
      <p className="m-0">
            <strong>Synonyms:</strong> {props.synonyms.join(", ")}
        </p>
      )}
      {props.antonyms.length > 0 && (
        <p className="m-0">
          <strong>Antonyms:</strong> {props.antonyms.join(", ")}
        </p>
      )}
      </li>
      </ul>
    </div>
  );
}
