import React from 'react';
import styles from './Payment.module.css';

function Payment() {
  return (
    <>
    <div className={styles.sectionHeight}>
        <div className="container">
            <div className={`${styles.bgg} p-3 rounded-2 my-2`}>
                <div className="d-flex align-items-center gap-3 text-info">
                    <input type="radio" name="payment" />
                    <h4>الدفع عن طريق البطاقة الائتمانية</h4>
                </div>
                <div className="d-flex align-items-center gap-3 text-info">
                    <input type="radio" name="payment" />
                    <h4>الدفع عند الاستلام</h4>
                </div>
            </div>
            <div className='my-3 float-start d-flex align-items-center gap-3'>
                <h3 className='text-info'>
                    1250
                    <span className='text-white mx-2'>جنية</span>
                </h3>
                <button className="btn btn-info px-5">اتمام الشراء</button>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
    </>
  )
}

export default Payment
