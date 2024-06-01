/* eslint-disable react/display-name */
// NoteModal.jsx
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "react-modal";
import "../css/NoteModal.css";

Modal.setAppElement("#root");

const NoteModal = React.forwardRef(({ addNote }, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [note, setNote] = useState("");
  const [format, setFormat] = useState({});
  const [color, setColor] = useState("#000000");

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSave() {
    const newNote = { text: note, format, color };
    addNote(newNote);
    setNote("");
    setFormat({});
    setColor("#000000");
    closeModal();
  }

  function handleFormatChange(newFormat) {
    setFormat((prevFormat) => {
      let updatedFormat = { ...prevFormat };
      for (let prop in newFormat) {
        if (prop === "textDecoration") {
          if (prevFormat[prop] && prevFormat[prop].includes(newFormat[prop])) {
            updatedFormat[prop] = prevFormat[prop]
              .replace(newFormat[prop], "")
              .trim();
          } else {
            updatedFormat[prop] = prevFormat[prop]
              ? `${prevFormat[prop]} ${newFormat[prop]}`.trim()
              : newFormat[prop];
          }
        } else {
          if (prevFormat[prop] === newFormat[prop]) {
            delete updatedFormat[prop];
          } else {
            updatedFormat[prop] = newFormat[prop];
          }
        }
      }
      return updatedFormat;
    });
  }

  function handleColorChange() {
    setColor((prevColor) => (prevColor === "#000000" ? "#FF0000" : "#000000"));
  }

  return (
    <div ref={ref}>
      <svg
        onClick={openModal}
        id="plus"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(252, 252, 252, 1)" }}
      >
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
      </svg>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
      >
        <div className="header-modal">
          <svg
            id="close"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)" }}
            onClick={closeModal}
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Escribe tu nota..."
          id="WritheNote"
          style={{ ...format, color }}
        />
        <div className="footer-inf">
          <button onClick={() => handleFormatChange({ fontWeight: "bold" })}>
            Bold
          </button>
          <button
            onClick={() => handleFormatChange({ fontStyle: "italic" })}
          >
            Italic
          </button>
          <button
            onClick={() =>
              handleFormatChange({ textDecoration: "underline" })
            }
          >
            Underline
          </button>
          <button onClick={handleColorChange}>
            Color
          </button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </Modal>
    </div>
  );
});

export default NoteModal;

