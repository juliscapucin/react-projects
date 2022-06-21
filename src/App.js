import { Route, Routes } from "react-router-dom";

import Accordion from "./pages/Accordion";
import Home from "./pages/Home";
import InfiniteScroll from "./pages/InfiniteScroll";
import Pagination from "./pages/Pagination";
import RandomRecipe from "./pages/RandomRecipe";
import ShoppingCart from "./pages/ShoppingCart";
import Test from "./pages/Test";
import TodoList from "./pages/TodoList";

import SharedLayout from "./pages/SharedLayout";

import "./styles/App.scss";

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/accordion' element={<Accordion />} />
        <Route index element={<Home />} />
        <Route path='/infinitescroll' element={<InfiniteScroll />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/randomrecipe' element={<RandomRecipe />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/test' element={<Test />} />
        <Route path='/todolist' element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default App;
