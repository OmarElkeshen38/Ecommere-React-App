import React from 'react'
import AllproductsTitle from '../../Components/Allproducts/AllproductsTitle/AllproductsTitle'
import AllproductsFilter from '../../Components/Allproducts/AllproductsFilter/AllproductsFilter'
import AllproductsItems from '../../Components/Allproducts/AllproductsItems/AllproductsItems'

function AllProductsPage() {
  return (
    <>
      <div className="container">
        <div className="my-5">
          <AllproductsTitle />
          <div className="row">
            <AllproductsFilter />
            <AllproductsItems />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProductsPage
