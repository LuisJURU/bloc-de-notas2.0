/* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
// import "../css/Notes.css";



// function Notes() {
 
//   return (
//     <div className="container-notes">
//       <div className="notes">
//       </div>
//     </div>
//   );
// }

// export default Notes;

import "../css/Notes.css";

function Notes({ notes }) {
  return (
    <div className="container-notes">
      <div className="notes">
        {notes.map((note, index) => (
          <div key={index} className="note">
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
