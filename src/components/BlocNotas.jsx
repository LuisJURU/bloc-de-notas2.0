/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../css/BlocNotas.css";
import { getAuth, signOut } from "firebase/auth";
import Header from "./Header";
import Notes from "./Notes";
import appFirebase from "../credenciales";

const auth = getAuth(appFirebase);

const Index = ({ userCorreo }) => {
  const [notas, setNotas] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    if (userId) {
      loadNotesFromIndexedDB();
    }
  }, [userId]);

  useEffect(() => {
    setFilteredNotes(notas);
  }, [notas]);

  const loadNotesFromIndexedDB = () => {
    const request = window.indexedDB.open("notasDB", 1);

    request.onerror = (event) => {
      console.log("Error opening IndexedDB:", event.target.error);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["notas"], "readonly");
      const objectStore = transaction.objectStore("notas");
      const getAllRequest = objectStore.getAll();

      getAllRequest.onsuccess = (event) => {
        const allNotes = event.target.result;
        const userNotes = allNotes.filter((note) => note.userId === userId);
        setNotas(userNotes);
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("notas")) {
        db.createObjectStore("notas", { keyPath: "id", autoIncrement: true });
      }
    };
  };

  const addNote = (newNote) => {
    const request = window.indexedDB.open("notasDB", 1);

    request.onerror = (event) => {
      console.log("Error opening IndexedDB:", event.target.error);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["notas"], "readwrite");
      const objectStore = transaction.objectStore("notas");
      const addRequest = objectStore.add({ text: newNote, userId });

      addRequest.onsuccess = () => {
        loadNotesFromIndexedDB();
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  };

  const deleteNote = (noteId) => {
    const request = window.indexedDB.open("notasDB", 1);

    request.onerror = (event) => {
      console.log("Error opening IndexedDB:", event.target.error);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["notas"], "readwrite");
      const objectStore = transaction.objectStore("notas");
      const deleteRequest = objectStore.delete(noteId);

      deleteRequest.onsuccess = () => {
        loadNotesFromIndexedDB();
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  };

  const updateNote = (noteId, newText) => {
    const request = window.indexedDB.open("notasDB", 1);

    request.onerror = (event) => {
      console.log("Error opening IndexedDB:", event.target.error);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(["notas"], "readwrite");
      const objectStore = transaction.objectStore("notas");
      const getRequest = objectStore.get(noteId);

      getRequest.onsuccess = (event) => {
        const noteToUpdate = event.target.result;
        noteToUpdate.text = newText;
        const updateRequest = objectStore.put(noteToUpdate);

        updateRequest.onsuccess = () => {
          loadNotesFromIndexedDB();
        };
      };

      transaction.oncomplete = () => {
        db.close();
      };
    };
  };

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
  };

  const handleUpdateNote = (noteId, newText) => {
    updateNote(noteId, newText);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredNotes = notas.filter((note) =>
      note.text.toLowerCase().includes(searchTerm)
    );
    setFilteredNotes(filteredNotes);
  };

  return (
    <>
      <div className="logout">
        <button id="btn-logout" onClick={() => signOut(auth)}>
          Cerrar Sesion
        </button>
      </div>
      <div className="container-bloc">
        <div className="in-bloc">
          <div>
            <Header userCorreo={userCorreo} addNote={addNote} />
            <input
              type="text"
              placeholder="Buscar..."
              onChange={handleSearch}
            />
          </div>
          <Notes
            notes={filteredNotes}
            deleteNote={handleDeleteNote}
            updateNote={handleUpdateNote}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
