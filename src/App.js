// import { NavLink } from "react-router-dom";

import Reviews from "./pages/Reviews";

import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <article className='item-container'>
          <Reviews />
        </article>
      </div>
    </div>
  );
}

export default App;
