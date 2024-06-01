/* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
import { useState } from "react";
import "../css/Notes.css";

import Delete from "./Delete";
import Update from "./Update";

function Notes({ notes, deleteNote, updateNote }) { // Añade deleteNote y updateNote como propiedades
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleClick = (note) => {
    setSelectedNote(note);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-notes">
      {notes.length > 0 &&
        notes.map(
          (note, index) =>
            note.text &&
            note.text.trim() !== "" && (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="notes" onClick={() => handleClick(note)}>
                  <div>{note.text}</div>
                </div>
                <div className="actions">
                  <Delete onClick={() => deleteNote(note.id)} /> {/* Pasar la función deleteNote con el ID de la nota */}
                  <Update onClick={() => updateNote(note.id, "Nuevo texto")} /> {/* Pasar la función updateNote con el ID de la nota y el nuevo texto */}
                </div>
              </div>
            )
        )}
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <button onClick={handleClose}>Cerrar</button>
            <p>{selectedNote.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
