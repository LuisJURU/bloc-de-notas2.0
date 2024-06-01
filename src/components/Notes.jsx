/* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
import { useState } from "react";
import "../css/Notes.css";
import NoteModal from "./NoteModal"; // Importa NoteModal
import Delete from "./Delete"; // Importa Delete
import Update from "./Update"; // Importa Update

function Notes({ notes, deleteNote, updateNote }) {
  const [selectedNote, setSelectedNote] = useState(null); // Estado para la nota seleccionada

  const handleEditNote = (note) => {
    setSelectedNote(note); // Almacena la nota seleccionada en el estado
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
                <div
                  className="notes"
                  onClick={() => handleEditNote(note)} // Maneja el clic para editar la nota
                >
                  <div>{note.text}</div>
                </div>
                <div className="actions">
                  {/* Pasar la función deleteNote con el ID de la nota */}
                  <Delete onClick={() => deleteNote(note.id)} />
                  {/* Pasar la función updateNote con el ID de la nota y el nuevo texto */}
                  <Update onClick={() => updateNote(note.id, "Nuevo texto")} />
                </div>
              </div>
            )
        )}
      {/* Renderizar NoteModal si hay una nota seleccionada */}
      {selectedNote && (
        <NoteModal
          note={selectedNote}
          updateNote={updateNote}
          onClose={() => setSelectedNote(null)} // Maneja el cierre del modal
        />
      )}
    </div>
  );
}

export default Notes;
