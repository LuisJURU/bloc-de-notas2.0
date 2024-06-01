import React, { useState } from "react";
import Modal from "react-modal";
import "../css/NoteModal.css"; // Importa el archivo CSS

Modal.setAppElement("#root");
const NoteModal = React.forwardRef((props, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [note, setNote] = useState(''); // Estado para la nota actual

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSave() {
    console.log(note);
    setNote(''); 
    closeModal(); 
  }

  return (
    <div ref={ref}>
    <svg
      onClick={openModal} id="plus"
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
           <svg id="close"
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
          placeholder="Escribe algo boludo"
        />
        <div className="footer-inf">
          <svg id="check"
            onClick={handleSave}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 1)" }}
          >
            <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
          </svg>
        </div>
      </Modal>
    </div>
  );
});

NoteModal.displayName = "NoteModal";

export default NoteModal;
