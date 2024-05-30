import "../css/NavBar.css";

function NavBar() {
  return (
    <div className="nav">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(255, 255, 255)"}}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(252, 252, 252, 1)"}}><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
      <h2></h2>
    </div>
  );
}

export default NavBar;

