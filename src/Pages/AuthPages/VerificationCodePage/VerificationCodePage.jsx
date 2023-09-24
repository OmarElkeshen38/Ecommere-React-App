import React from 'react';
import styles from "./VerificationCode.module.css";
import { Link, useNavigate } from "react-router-dom";

function VerificationCodePage() {

  const navigate = useNavigate();
    function goToChangePass() {
      navigate("/new-pass");
    }

  return (
    <>
      <div className="container">
        <div className={`${styles.log} d-flex align-items-center justify-content-center`}>
            <div className="w-75">
                <div className="text-white text-center">
                    <h2 className=''>أدخل الرمز المرسل . . .</h2>
                    <p className='fs-5'>تحقق من</p>
                    <p className='fs-5'>htlr38@gmail.com</p>
                    <Link to={'/reset-pass'} className="text-info mx-2 fs-5">تغيير البريد الالكتروني</Link>
                </div>
                
                <div className="my-4">
                    <input className='form-control mb-4 py-2' type="number" placeholder='رمز التفعيل' />
                    <div className="d-flex justify-content-center">
                        <button onClick={goToChangePass} className='btn btn-primary fs-5'>تأكيد</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default VerificationCodePage
