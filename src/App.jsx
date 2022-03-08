
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Juridica from "./Juridica";
import Login from "./Login"
import Natural from "./Natural";
import Home from "./Home";
import ListaCategorias from "./ListaCategorias";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}/>,
        <Route path="/Natural" element={<Natural />}/>,
        <Route path="/Juridica" element={<Juridica />}/>,
        <Route path="/Home" element={<Home/>}/>,
        <Route path="/ListaCategorias" element={<ListaCategorias/>}/>     
      </Routes>
         
      
      
    </Router>
    
  )
}

export default App;
