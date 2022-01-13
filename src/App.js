import "./App.css";
// import Assignment2a from "./components/react-training/Assignment2a";
import { Routes, Route, Link } from "react-router-dom";
import Ass3Home from "./components/assignment3/pages/Ass3Home";
import Ass3Posts from "./components/assignment3/pages/Ass3Posts";
import Ass3Articles from "./components/assignment3/pages/Ass3Articles";
import Ass3Flutter from "./components/assignment3/pages/Ass3Flutter";
import Ass3Firebase from "./components/assignment3/pages/Ass3Firebase";

function App() {
  return (
    <div classNameName="App">
      {/* <MainScreen></MainScreen> */}
      {/* <Assignment1a></Assignment1a> */}
      {/* <p classNameName="container w-75 para my-3" style={{ fontSize: "1.5rem" }}>
        The below Form takes 3 inputs and evertime the form is submitted
        (created) the state is upadated and it is logged onto the console as an
        object. Please open console.
      </p>
      <Assignment2a></Assignment2a> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <Link className="nav-link text-white title" to="">
            My Flutter
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="articles">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Ass3Home />}></Route>
        <Route path="posts" element={<Ass3Posts />}></Route>
        <Route path="articles" element={<Ass3Articles />}>
          <Route path="flutter" element={<Ass3Flutter />}></Route>
          <Route path="firebase" element={<Ass3Firebase />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
