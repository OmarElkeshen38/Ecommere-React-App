import React from 'react'
import Subtitle from '../../Components/Utilities/Subtitle/Subtitle'
import CartProductCard from '../../Components/CartComp/CartProductCard/CartProductCard'
import CartSallary from '../../Components/CartComp/CartSallary/CartSallary'

function CartPage() {
  return (
    <>
       <div className="my-3">
            <Subtitle catig="عربة التسوق" />
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <CartProductCard />
                  <CartProductCard />
                  <CartProductCard />
                </div>
                <div className="col-md-2">
                  <CartSallary />
                </div>
              </div>
            </div>
       </div>
    </>
  )
}

export default CartPage
