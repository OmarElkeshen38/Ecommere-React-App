import React from 'react'
import CartProductCard from '../../CartComp/CartProductCard/CartProductCard';
import Subtitle from '../../Utilities/Subtitle/Subtitle';

function ManageOrders() {
  return (
    <>
      <div className="rounded-2">
        <Subtitle catig="ادارة جميع الطلبات" />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </div>
    </>
  );
}

export default ManageOrders
