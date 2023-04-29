import React from "react";
import PagesRoutes from "./pages-routes/PagesRoutes";

import Header from "./components/navigation/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <PagesRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
