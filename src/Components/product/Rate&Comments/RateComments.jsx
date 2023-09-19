import React from 'react';
import styles from './RateComments.module.css';

function RateComments() {
    return (
        <>
            <div className={`p-3 rounded-3 ${styles.ratec}`}>
                <div className={`my-3 ${styles.rate}`}>
                    <h3 className="text-info">هتلر حرب</h3>
                    <textarea name="" cols="20" rows="5" placeholder="اكتب تعليقا . . . . " className="form-control w-100 my-3"></textarea>
                    <button className="btn btn-info">اضافة تعليق</button>
                    <div className="clearfix"></div>
                </div>
                <div className="my-3">
                    <hr className='text-white' />
                    <h3 className="text-info">هتلر حرب</h3>
                    <p className='text-white fs-5'>منتج جيد وممتاذ ورايق وتقيل</p>
                </div>
                <div className="my-3">
                    <hr className='text-white' />
                    <h3 className="text-info">هتلر حرب</h3>
                    <p className='text-white fs-5'>منتج جيد وممتاذ ورايق وتقيل</p>
                </div>
            </div>
            
        </>
    );
}

export default RateComments
