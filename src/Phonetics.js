import React from "react";
import "./Definitions.css";


export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <h3>Phonetics</h3>
      <ul>
        {props.phonetics.map((phonetic, index) => (
          <li key={index}>
            {phonetic.text && (
              <p>
                <strong>Text:</strong> {phonetic.text}{" "}
                {phonetic.audio && (
                  <a
                    href={phonetic.audio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen
                  </a>
                )}
              </p>
            )}
            {!phonetic.text && phonetic.audio && (
              <p>
                <strong>Audio:</strong>{" "}
                <a
                  href={phonetic.audio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listen
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
