import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";
import ShoppingCart from "./pages/ShoppingCart";
import TodoList from "./pages/TodoList";
import Accordion from "./pages/Accordion";
import SharedLayout from "./pages/SharedLayout";

import "./styles/App.scss";

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/todolist' element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
