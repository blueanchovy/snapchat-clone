import React from "react";
import "./App.css";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app__body">
          <Routes>
            <Route index element={<WebcamCapture />}></Route>
            <Route path="Preview" element={<Preview />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
