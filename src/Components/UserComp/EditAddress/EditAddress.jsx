import React from 'react';
import styles from './EditAddress.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';

function EditAddress() {
  return (
    <>
      <Subtitle catig="تعديل العنوان" />
      <div className={`w-75 rounded-2 p-3 ${styles.content}`}>
        <input type="text" placeholder='' className="form-control" />
        <input type="text" placeholder='' className="form-control my-3" />
        <input type="number" placeholder='' className="form-control" />
        <button className="btn btn-primary px-5 mt-3 fs-5 float-start">حفظ العنوان</button>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default EditAddress
