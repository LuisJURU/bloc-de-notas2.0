import React from "react";
import Modal from "react-modal";
import "../css/NoteModal.css"; // Importa el archivo CSS

Modal.setAppElement("#root");
const NoteModal = React.forwardRef((props, ref) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div ref={ref}>
      <svg
        onClick={openModal}
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
        contentLabel="Mi Modal"
        className="modalContent" // Usa la clase que definiste en el archivo CSS
        overlayClassName="modalOverlay" // Asegúrate de que estás aplicando la clase 'modalOverlay' al overlay del modal
      >
        <div className="header-modal">
          <svg
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
        <textarea name="" id="WritheNote"></textarea>

        <div className="footer-inf"></div>
      </Modal>
    </div>
  );
});

NoteModal.displayName = "NoteModal";

export default NoteModal;
