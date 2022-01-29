import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages";
import SigninPage from "./pages/signin";
import Data from "./pages/data"
import UserPage from './pages/userpage'
import Adminpage from './pages/adminpage'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route path="/signin" element={<SigninPage/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/adminpage" element={<Adminpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
