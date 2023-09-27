import React from 'react';
import styles from './AddSubCategorie.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';

function AddSubCategorie() {
  return (
    <>
      <Subtitle catig="أضف تصنيف فرعي جديد" />
      <div className={`w-75 rounded-2 p-3 ${styles.subCateContent}`}>
        <input type="text" placeholder='اسم التصنيف الفرعي' className="form-control" />
        <select className='form-control my-3' placeholder='اختر التصنيف الرئيسي' name="categorie" id="categorie">
          <option value="ملابس رجالي">ملابس رجالي</option>
          <option value="أحذية رجالي">أحذية رجالي</option>
          <option value="ملابس حريمي">ملابس حريمي</option>
          <option value="ساعات">ساعات</option>
        </select>
        <button className="btn btn-primary px-5 fs-5 float-start">حفظ</button>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default AddSubCategorie
