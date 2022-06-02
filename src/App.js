// import { NavLink } from "react-router-dom";

import Submenus from "./pages/Submenus";

import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <article className='item-container'>
          <Submenus />
        </article>
      </div>
    </div>
  );
}

export default App;
