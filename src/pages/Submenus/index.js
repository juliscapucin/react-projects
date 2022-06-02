import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

import { AppProvider } from "./context";

import "./index.css";

function App() {
  return (
    <React.StrictMode>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <Submenu />
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
