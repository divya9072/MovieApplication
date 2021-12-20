import React from "react";
import Main from "./Main";
import Moviecard from "./movieCard";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

let App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}>
          </Route>
          <Route path="/Moviecard/:id" element={<Moviecard/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
export default App; 