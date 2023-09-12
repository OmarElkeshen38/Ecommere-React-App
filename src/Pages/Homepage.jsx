import React from 'react';
import Header from '../Components/Header/Header';
import Categories from '../Components/Categories/Categories';
import Bestsalies from '../Components/Bestsalies/Bestsalies';
import Newsalies from '../Components/Newsalies/Newsalies';
import Advertisement from '../Components/Advertisement/Advertisement';

function Homepage() {
  return (
    <>
      <Header />
      <Categories />
      <Bestsalies />
      <Advertisement />
      <Newsalies />
    </>
  )
}

export default Homepage
