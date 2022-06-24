import { Route, Routes } from "react-router-dom";

import Accordion from "./pages/Accordion";
import DarkMode from "./pages/DarkMode";
import PhotoGallery from "./pages/PhotoGallery";
import GridStretch from "./pages/GridStretch";
import Home from "./pages/Home";
import HorizontalSnap from "./pages/HorizontalSnap";
import HorizontalGroupSnap from "./pages/HorizontalGroupSnap";
import InfiniteScroll from "./pages/InfiniteScroll";
import Pagination from "./pages/Pagination";
import RandomRecipe from "./pages/RandomRecipe";
// import ShoppingCart from "./pages/ShoppingCart";
// import TodoList from "./pages/TodoList";

import SharedLayout from "./pages/SharedLayout";

import "./styles/App.scss";

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/darkmode' element={<DarkMode />} />
        <Route path='/photogallery' element={<PhotoGallery />} />
        <Route path='/gridstretch' element={<GridStretch />} />
        <Route index element={<Home />} />
        <Route path='/horizontalsnap' element={<HorizontalSnap />} />
        <Route path='/horizontalgroupsnap' element={<HorizontalGroupSnap />} />
        <Route path='/infinitescroll' element={<InfiniteScroll />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/randomrecipe' element={<RandomRecipe />} />
        {/* <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/todolist' element={<TodoList />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
