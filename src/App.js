import React from 'react';
import Homepage from './Pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Allcategories from './Components/Allcategories/Allcategories';
import Allproducts from './Components/Allproducts/Allproducts';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} ></Route>
            <Route path='/home' element={<Homepage />} ></Route>
            <Route path='/allCategories' element={<Allcategories />} ></Route>
            <Route path='/Allproducts' element={<Allproducts />} ></Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App
