import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Components/Loginpage";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Loginpage/>} />
            <Route path="/read" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
