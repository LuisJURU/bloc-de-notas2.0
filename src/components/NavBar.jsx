/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import "../css/NavBar.css";
import NoteModal from './NoteModal'; // Asegúrate de que la ruta de importación sea correcta

function NavBar({ addNote }) {
  const noteModalRef = React.useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Lógica de búsqueda
    console.log("Buscando: ", searchTerm);
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }

  return (
    <div className="nav">
      <svg id='search' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255)" }} onClick={toggleSearch}>
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
      </svg>
      {showSearch ? <input type="text" onChange={handleSearch} value={searchTerm} placeholder="Buscar..." className="search-input active" /> : <input type="text" onChange={handleSearch} value={searchTerm} placeholder="Buscar..." className="search-input" />}
      <NoteModal ref={noteModalRef} addNote={addNote} />
      <h2></h2>
    </div>
  );
}

export default NavBar;
