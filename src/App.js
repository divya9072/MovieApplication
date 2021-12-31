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
import Login from "./login";



let App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}/>

          <Route path="/Moviecard/:id" element={<Moviecard />}/>
       
          <Route path="/Person/:id" element={<Person />}/>
         
          <Route path="/Moviekids" element={<Moviekids />}/>
       
          <Route path="/Theatres" element={<Theater />}/>
        
          <Route path="/sign" element={<Sign />}/>
        
          <Route path="/login" element={<Login />}/>
          
          <Route path="/Main" element={<Main />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
export default App; 