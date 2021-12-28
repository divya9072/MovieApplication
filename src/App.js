import React from "react";
import Main from "./Main";
import Moviecard from "./movieCard";
import Moviekids from "./Moviekids";
import Person from "./Person";
import Theater from "./Theatres"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sign from "./signup";



let App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}>
          </Route>
          <Route path="/Moviecard/:id" element={<Moviecard />}>
          </Route>
          <Route path="/Person/:id" element={<Person />}>
          </Route>
          <Route path="/Moviekids" element={<Moviekids />}>
          </Route>
          <Route path="/Theatres" element={<Theater />}>
          </Route>
          <Route path="/sign" element={<Sign />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
export default App; 