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
    addNote(note);
    setNote("");
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
          id="WritheNote"
          placeholder="Escribe algo"
          style={{ ...format, color: color }}
        ></textarea>
        <div className="footer-inf">
          <svg
            id="check"
            onClick={handleSave}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)" }}
          >
            <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
          </svg>
          <svg
            id="tachado"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() =>
              handleFormatChange({ textDecoration: "line-through" })
            }
          >
            <text
              x="5"
              y="20"
              style={{
                fontFamily: "Courier New",
                fontSize: "24",
                fill: "#000",
              }}
            >
              A
            </text>
            <line
              x1="0"
              y1="15"
              x2="24"
              y2="15"
              style={{ stroke: "#000", strokeWidth: "2" }}
            />
          </svg>
          <svg
            id="subrayado"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => handleFormatChange({ textDecoration: "underline" })}
          >
            <text
              x="5"
              y="20"
              style={{
                textDecoration: "underline",
                fontFamily: "Courier New",
                fontSize: "24",
                fill: "#000",
              }}
            >
              S
            </text>
          </svg>
          <svg             id="color"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => handleColorChange()}
          >
            <text
              x="5"
              y="20"
              style={{
                fontFamily: "Courier New",
                fontSize: "24",
                fill: "#000",
              }}
            >
              C
            </text>
            <line
              x1="0"
              y1="22"
              x2="24"
              y2="22"
              style={{ stroke: "#000", strokeWidth: "2" }}
            />
          </svg>
          <svg
            id="cursiva"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => handleFormatChange({ fontStyle: "italic" })}
          >
            <text
              x="5"
              y="20"
              style={{
                fontStyle: "italic",
                fontFamily: "Courier New",
                fontSize: "24",
                fill: "#000",
              }}
            >
              I
            </text>
          </svg>
          <svg
            id="negrilla"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => handleFormatChange({ fontWeight: "bold" })}
          >
            <text
              x="5"
              y="20"
              style={{
                fontWeight: "bold",
                fontFamily: "Courier New",
                fontSize: "24",
                fill: "#000",
              }}
            >
              B
            </text>
          </svg>
        </div>
      </Modal>
    </div>
  );
});

NoteModal.displayName = "NoteModal";

export default NoteModal;

