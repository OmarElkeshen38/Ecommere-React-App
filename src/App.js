import React from 'react';
import Homepage from './Pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Utilities/Navbar/Navbar';
import Footer from './Components/Utilities/Footer/Footer';
import Allcategories from './Components/Allcategories/Allcategories';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} ></Route>
            <Route path='/home' element={<Homepage />} ></Route>
            <Route path='/allCategories' element={<Allcategories />} ></Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App
