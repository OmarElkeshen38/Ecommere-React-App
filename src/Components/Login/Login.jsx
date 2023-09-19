import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="container">
        <div className={`${styles.log} d-flex align-items-center justify-content-center`}>
            <div className="w-75">
                <h2 className='text-white text-center'>تسجيل الدخول</h2>
                <div className="my-4">
                    <input className='form-control py-2' type="text" placeholder='اسم المستخدم' />
                    <input className='form-control py-2 my-3' type="password" placeholder='كلمة المرور' />
                    <div className="d-flex justify-content-center">
                        <button className='btn btn-primary fs-5'>الدخول</button>
                    </div>
                </div>
                <div className="my-2 text-center">
                    <p className='text-white fs-5'>ليس لديك حساب؟ <Link to={'/register'} className="text-info mx-2">اضغط هنا</Link></p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
