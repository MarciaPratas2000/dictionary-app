import React from "react";
import "./Definitions.css";


export default function SynonymsAntonyms(props) {
  return (
    <div className="synonyms-antonyms ">
      <ul>
      <li>   
      {props.synonyms.length > 0 && (
      <p >
            <strong>Synonyms:</strong> {props.synonyms.join(", ")}
        </p>
      )}
       </li>
       <li> 
      {props.antonyms.length > 0 && (
        <p >
          <strong>Antonyms:</strong> {props.antonyms.join(", ")}
        </p>
      )}
      </li>
      </ul>
    </div>
  );
}
