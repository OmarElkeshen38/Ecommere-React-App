import React from 'react';
import styles from './AddAdress.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';

function AddAdress() {
  return (
    <>
      <Subtitle catig="اضافة عنوان جديد" />
      <div className={`w-75 rounded-2 p-3 ${styles.content}`}>
        <input type="text" placeholder='ادخل نوع العنوان (المنزل)' className="form-control" />
        <input type="text" placeholder='العنوان تفصيلي' className="form-control my-3" />
        <input type="number" placeholder='رقم الهاتف' className="form-control" />
        <button className="btn btn-primary px-5 mt-3 fs-5 float-start">حفظ العنوان</button>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default AddAdress
