import React from 'react';
import Header from '../Components/HomepageComponents/Header/Header';
import Categories from '../Components/HomepageComponents/Categories/Categories';
import Bestsalies from '../Components/HomepageComponents/Bestsalies/Bestsalies';
import Newsalies from '../Components/HomepageComponents//Newsalies/Newsalies';
import Advertisement from '../Components/HomepageComponents/Advertisement/Advertisement';
import BrandsCointer from '../Components/HomepageComponents/BrandsCointer/BrandsCointer';

function Homepage() {
  return (
    <>
      <Header />
      <Categories />
      <Bestsalies />
      <Advertisement />
      <Newsalies />
      <BrandsCointer />
    </>
  )
}

export default Homepage
