import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Create from "./views/Create";
import Home from "./views/Home";
import Error404 from "./views/Error404";
import Detail from "./views/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/pokemon/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
