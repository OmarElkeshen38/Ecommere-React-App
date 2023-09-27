import React from 'react';
import styles from './AdminPage.module.css';
import { Link, Outlet } from 'react-router-dom';

function AdminPage() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-2 my-4">
                    <div className={`p-3 d-flex flex-column rounded-2 ${styles.bgLinks}`}>
                        <Link to={'orders'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>ادارة الطلبات</Link>
                        <Link to={'products'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>ادارة المنتجات</Link>
                        <Link to={'add-brand'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>اضف ماركة</Link>
                        <Link to={'add-categorie'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>اضف تصنيف</Link>
                        <Link to={'add-subcategorie'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>اضف تصنيف فرعي </Link>
                        <Link to={'add-product'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>اضف منتج</Link>
                        <Link to={'add-coupon'} className='text-white-50 fs-5 border text-center rounded-2 p-2 my-2'>اضف كوبون خصم</Link>
                    </div>
                </div>
                <div className="col-lg-10 my-3">
                    <div className="p-3 rounded-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminPage
