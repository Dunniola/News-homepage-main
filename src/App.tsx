import Navbar from "../src/Components/Navbar";

import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import  MainSection from "./MainSection";
import Popular from "./Popular";
import New from "./New";
import Trending from "./Trending";
import Categories from "./Categories";




function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <MainSection></MainSection>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/New' element={<New/>} />
        <Route path='/Popular' element={<Popular/>} />
        <Route path='/Trending' element={<Trending/>} />
        <Route path='/Categories' element={<Categories/>} />
      </Routes>
      
    </div>
  )
}

export default App
