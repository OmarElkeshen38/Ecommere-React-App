import React, { useState } from 'react'
import Subtitle from '../../Utilities/Subtitle/Subtitle';
import styles from './AddBrand.module.css';
import uploadImg from '../../../images/Upload-PNG (1).png';

function AddBrand() {

  const [image, setImage] = useState('');
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
      <Subtitle catig="أضف ماركة جديدة" />
      <div className={`w-75 text-white p-3 rounded-2 ${styles.brandContent}`}>
        <h5>صورة الماركة</h5>
        <label htmlFor="brandImg" className='w-25'>
          {image ? (<img src={URL.createObjectURL(image)} className='w-100' alt="brand" />) 
          : 
          (<img src={uploadImg} className='w-100' alt="brand" />)}
          
        </label>
        <input type="file" id='brandImg' className="d-none"
          accept='/image/*'
          onChange={handelImage}/>
        <input type="text" placeholder='اسم الماركة' className="form-control my-3" />
        <button className="btn btn-primary px-5 fs-5 float-start">حفظ</button>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default AddBrand
