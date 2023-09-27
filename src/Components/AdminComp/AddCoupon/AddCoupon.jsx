import React from 'react';
import styles from './AddCoupon.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';

function AddCoupon() {
  return (
    <>
      <Subtitle catig="أضف كوبون خصم" />
      <div className={`p-3 w-75 rounded-2 text-white ${styles.couponContent}`}>
        <input type="text" placeholder="اسم الكوبون" className="form-control" />
        <input type="date" className="form-control my-3" />
        <input type="number" placeholder="قيمة الخصم" className="form-control" />
        <button className="btn btn-primary px-5 fs-5 mt-3 float-start">حفظ</button>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default AddCoupon
