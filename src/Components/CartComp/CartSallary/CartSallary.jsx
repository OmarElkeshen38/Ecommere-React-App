import React from 'react';
import styles from './CartSallary.module.css';
import { useNavigate } from 'react-router-dom';

function CartSallary() {

    const navigate = useNavigate();
    function goToPayment() {
        navigate('/payment');
    }

  return (
    <>
        <div className={`${styles.bgg} my-2 p-2 rounded-2`}>
            <input className='form-control' type="number" placeholder='كود الخصم' />
            <button className="btn btn-info w-100 my-2 fs-5">تطبيق</button>
            <h4 className='text-white text-center my-2'>1290 جنية</h4>
            <button onClick={goToPayment} className="btn btn-info w-100 my-2 fs-5">اتمام الشراء</button>
        </div>
    </>
  )
}

export default CartSallary
