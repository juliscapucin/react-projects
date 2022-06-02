import React from "react";
import { AppProvider } from "./context";

import Loader from "./Loader";

import "./index.css";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  return (
    <React.StrictMode>
      <AppProvider>
        <main>
          <Loader />
          <Navbar />
          <CartContainer />
        </main>
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
