import React from 'react'
import Subtitle from '../../Components/Utilities/Subtitle/Subtitle';
import Payment from '../../Components/PaymentComp/Payment';

function PaymentPage() {
  return (
    <>
        <div className="my-3">
            <Subtitle catig="أختر طريقة الدفع" />
            <Payment />
        </div>
    </>
  );
}

export default PaymentPage
