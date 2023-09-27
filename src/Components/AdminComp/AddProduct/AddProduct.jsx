import React, { useState } from 'react';
import styles from './AddProduct.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';
import uploadImg from "../../../images/Upload-PNG (1).png";


function AddProduct() {

  const [image, setImage] = useState("");
  function handelImage(event) {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  }

  return (
    <>
      <Subtitle catig="أضف منتج جديد" />
      <div className={`w-75 rounded-2 text-white p-3 ${styles.productContent}`}>
        <h5>صور المنتج</h5>
        <label htmlFor="brandImg" className='w-25'>
          {image ? (<img src={URL.createObjectURL(image)} className='w-100' alt="brand" />) 
          : 
          (<img src={uploadImg} className='w-100' alt="brand" />)}
          
        </label>
        <input type="file" id='brandImg' className="d-none"
          accept='/image/*'
          onChange={handelImage}/>
          <input type="text" placeholder='اسم المنتج' className="form-control my-3" />
          <textarea className='form-control' name="desc" placeholder='وصف المنتج' rows="3"></textarea>
          <input type="number" placeholder='السعر قبل الخصم' className="form-control my-3" />
          <input type="number" placeholder='سعر المنتج' className="form-control" />
          <input type="number" placeholder='الكمية' className="form-control my-3" />
          <div>
            <label htmlFor="categorie" className='fs-5'>اختر التصنيف الرئيسي</label>
            <select className='form-control' name="categorie" id="categorie">
              <option value="ملابس رجالي">ملابس رجالي</option>
              <option value="أحذية رجالي">أحذية رجالي</option>
              <option value="ملابس حريمي">ملابس حريمي</option>
              <option value="ساعات">ساعات</option>
            </select>
          </div>
          <div className="my-3">
            <label htmlFor="subCategorie" className='fs-5'>اختر التصنيف الفرعي</label>
            <select className='form-control' name="subCategorie" id="subCategorie">
              <option value="شورت">شورت</option>
              <option value="تيشرت">تيشرت</option>
              <option value="جاكت">جاكت</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="Brand" className='fs-5'>اختر الماركة</label>
            <select className='form-control' name="Brand" id="Brand">
              <option value="zara">zara</option>
              <option value="nike">nike</option>
              <option value="adidas">adidas</option>
            </select>
          </div>
        <button className="btn btn-primary px-5 fs-5 float-start">حفظ</button>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default AddProduct
