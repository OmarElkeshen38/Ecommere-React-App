import React, { useState } from 'react';
import styles from './CartProductCard.module.css';
import catigory1 from "../../../images/catigory1.jpg";


function CartProductCard() {

    const [products, setProducts] = useState([
    {
        index: "0",
        categ: "أحذية رجالي",
        title: "اير جوردن",
        brand: "zara",
        desc: "جامد جدا حرفيا حذاء بيطير جامد جدا جامد جدا جامد جدا جامد جدا حرفيا حذاء بيطير جامد جدا جامد جدا جامد جدا جامد جد جامد جدا جامد جدا حرفيا",
        price: "430",
        rate: "4.4",
        img: catigory1,
    },
  ]);
  const product = products[0];

    return (
        <>
            <div className={`${styles.cart} my-2 p-2 rounded-2`}>
                <div className="d-flex text-white justify-content-between">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="img">
                                <img className='w-100 rounded-2' src={catigory1} alt="product" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="">
                                <div>
                                    <h3 className='text-info'>{product.categ} :</h3>
                                    <p className='fs-4'>{product.title}</p>
                                </div>
                                <div className='my-4'>
                                    <h3 className='text-info'>الماركة :</h3>
                                    <h2 className='fs-4'>{product.brand}</h2>
                                </div>
                                <div className='d-flex gap-3 align-items-center'>
                                    <h3 className='text-info'>الكمية :</h3>
                                    <span className='border px-4 py-2 rounded-2'>241</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-between">
                        <h3 className={`${styles.pointer} fs-4`}>
                            <i class="fa-solid fa-trash mx-2 fs-4 text-info"></i>
                            ازالة
                        </h3>
                        <h3 className='text-info fs-4'>
                            {product.price}
                            <span className='text-white mx-2'>جنية</span>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProductCard
