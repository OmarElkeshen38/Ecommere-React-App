import React from 'react';
import Homepage from './Pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Utilities/Navbar/Navbar';
import Footer from './Components/Utilities/Footer/Footer';
import Allcategories from './Components/Allcategories/Allcategories';
import Allbrands from './Components/Allbrands/Allbrands';
import Notdefine from './Components/Utilities/Notdefine/Notdefine';
import Allproducts from './Components/Allproducts/Allproducts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/allCategories" element={<Allcategories />}></Route>
        <Route path="/allProducts" element={<Allproducts />}></Route>
        <Route path="/allBrands" element={<Allbrands />}></Route>
        <Route path="*" element={<Notdefine />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
