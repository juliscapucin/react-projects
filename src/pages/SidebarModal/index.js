import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

import "./index.css";

import { AppProvider } from "./context";

function App() {
  return (
    <React.StrictMode>
      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
