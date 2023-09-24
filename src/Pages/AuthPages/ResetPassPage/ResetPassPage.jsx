import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from "./ResetPass.module.css";

function ResetPassPage() {

  const navigate = useNavigate();
    function goToVerification() {
        navigate("/Verification-code");
    }

  return (
    <>
      <div className="container">
            <div className={`${styles.log} d-flex align-items-center justify-content-center`}>
                <div className="w-75">
                    <h2 className='text-white text-center'>نسيت كلمة السر</h2>
                    <div className="my-4">
                        <input className='form-control mb-4 py-2' type="email" placeholder='البريد الالكتروني' />
                        <div className="d-flex justify-content-center">
                            <button onClick={goToVerification} className='btn btn-primary fs-5'>ارسال رمز التفعيل</button>
                        </div>
                    </div>
                    <div className="my-2 text-center">
                        <Link to={'/login'} className="text-info mx-2 fs-5">رجوع؟</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResetPassPage
