// import { NavLink } from "react-router-dom";

import ShoppingCart from "./pages/ShoppingCart";

import "./styles/App.scss";

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <article className='item-container'>
          <ShoppingCart />
        </article>
      </div>
    </div>
  );
}

export default App;
