/* eslint-disable react/prop-types */

import "../css/Update.css";

import { useState, useEffect } from "react";

function Update({ note, onUpdate, isEditing }) {
  const [editingNote, setEditingNote] = useState(note);

  useEffect(() => {
    setEditingNote(note);
  }, [note]);

  const handleTextChange = (event) => {
    setEditingNote({ ...editingNote, text: event.target.value });
  };

  const handleSave = () => {
    onUpdate(editingNote.id, editingNote.text);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <textarea
            id="textArea"
            value={editingNote.text}
            onChange={handleTextChange}
          />
          <button className="btn-save" onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <p>{note.text}</p>
      )}
    </div>
  );
}

export default Update;
