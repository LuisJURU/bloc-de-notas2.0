/* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
import { useState } from "react";
import "../css/Notes.css";

import Delete from "./Delete";
import Update from "./Update";

function Notes({ notes, deleteNote, updateNote }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (note) => {
    setSelectedNote(note);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    setIsEditing(false);
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
    setIsEditing(true);
    setShowPopup(true);
  };

  const handleUpdate = (id, newText) => {
    updateNote(id, newText);
    setIsEditing(false);
  };

  return (
<div style={{ overflowY: 'auto', maxHeight: '470px' }}>
{notes.map(
  (note, index) =>
    note.text &&
    note.text.trim() !== "" && (
      <div key={index} style={{ display: "flex", alignItems: "center", flexWrap: "wrap", overflow: "auto"}}>
        <div className="notes" onClick={() => handleClick(note)}>
          <div>{note.text}</div>
        </div>
        <div className="actions">
          <Delete onClick={() => deleteNote(note.id)} />
          <svg className="edit"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ transform: "", msFilter: "" }}
            onClick={() => handleEdit(note)}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      </div>
    )
)}
      {showPopup && selectedNote && (
        <div className="overlay">
          <div className="popup">
            <button onClick={handleClose}>Cerrar</button>
            <Update
              note={selectedNote}
              onUpdate={handleUpdate}
              isEditing={isEditing}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
