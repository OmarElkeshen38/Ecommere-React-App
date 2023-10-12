import React from 'react';
import styles from './UserPage.module.css';
import { Link, Outlet } from 'react-router-dom';

function UserPage() {
  return (
    <>
      <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-4 my-4">
                    <div className={`p-3 d-flex flex-column rounded-2 ${styles.bgLinks}`}>
                        <Link to={'user-orders'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>ادارة الطلبات</Link>
                        <Link to={'fav-products'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>المنتجات المفضلة</Link>
                        <Link to={'user-addresses'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>العناويين الشخصية</Link>
                        <Link to={'user-profile'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>الملف الشخصي</Link>
                    </div>
                </div>
                <div className="col-lg-10 col-md-8 my-3">
                    <div className="p-3 rounded-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default UserPage
