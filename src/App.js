// import { NavLink } from "react-router-dom";

import NavBar from "./pages/NavBar";

import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <article className='item-container'>
          <NavBar />
        </article>
      </div>
    </div>
  );
}

export default App;
