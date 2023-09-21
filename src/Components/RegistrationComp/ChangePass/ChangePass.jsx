import React from 'react';
import styles from './ChangePass.module.css';
import { Link, useNavigate } from 'react-router-dom';

function ChangePass() {

    const navigate = useNavigate();
    function goToLogin() {
      navigate("/login");
    }

  return (
    <>
        <div className="container">
            <div className={`${styles.log} d-flex align-items-center justify-content-center`}>
                <div className="w-75">
                    <h2 className='text-white text-center'>اعادة تعيين كلمة السر</h2>
                    <div className="my-4">
                        <input className='form-control mb-4 py-2' type="email" placeholder='البريد الالكتروني' />
                        <input className='form-control mb-4 py-2' type="password" placeholder='ادخل الرقم السري الجديد' />
                        <input className='form-control mb-4 py-2' type="password" placeholder='اعد ادخال الرقم السري الجديد' />
                        <div className="d-flex justify-content-center">
                            <button onClick={goToLogin} className='btn btn-primary fs-5'>تأكيد</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChangePass
