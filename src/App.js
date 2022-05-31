// import { NavLink } from "react-router-dom";

import LoremIpsum from "./pages/LoremIpsum";

import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <article className='item-container'>
          <LoremIpsum />
        </article>
      </div>
    </div>
  );
}

export default App;
