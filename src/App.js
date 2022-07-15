import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";

import Accordion from "./pages/Accordion";
import CustomCursor from "./pages/CustomCursor";
import DarkMode from "./pages/DarkMode";
import ExpansiveGrid from "./pages/ExpansiveGrid";
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
  useEffect(() => {
    document.title = "Juli Scapucin – React Playground";
  }, []);

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/customcursor' element={<CustomCursor />} />
        <Route path='/darkmode' element={<DarkMode />} />
        <Route path='/expansivegrid' element={<ExpansiveGrid />} />
        <Route path='/gridstretch' element={<GridStretch />} />
        <Route index element={<Home />} />
        <Route path='/horizontalsnap' element={<HorizontalSnap />} />
        <Route path='/horizontalgroupsnap' element={<HorizontalGroupSnap />} />
        <Route path='/infinitescroll' element={<InfiniteScroll />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/photogallery' element={<PhotoGallery />} />
        <Route path='/randomrecipe' element={<RandomRecipe />} />
        {/* <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/todolist' element={<TodoList />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
