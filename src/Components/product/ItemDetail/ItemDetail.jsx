import React, { useState } from 'react';
import catigory1 from "../../../images/catigory1.jpg";

function ItemDetail() {

    const [product, setProduct] = useState([
      {
        index: "0",
        categ: "أحذية رجالي",
        brand: "zara",
        title: "اير جوردن",
        desc: "جامد جدا حرفيا حذاء بيطير جامد جدا جامد جدا جامد جدا جامد جدا حرفيا حذاء بيطير جامد جدا جامد جدا جامد جدا جامد جد جامد جدا جامد جدا حرفيا",
        price: "800",
        rate: "4.4",
        img: catigory1,
      },
    ]);

    return (
        <>
            <div className="col-lg-8 px-3">
                {product.map((product, index) => (
                    <div key={index} className="bg-dange">
                        <div className="py-">
                            <h2 className="text-white">التصنيف : </h2>
                            <h3 className="text-info">{product.categ}</h3>
                        </div>
                        <div className="my-4">
                            <h2 className="text-white">الماركة : </h2>
                            <h3 className="text-info">{product.brand}</h3>
                        </div>
                        <div className="my">
                            <h2 className="text-white">المواصفات : </h2>
                            <h3 className="text-info">{product.desc}</h3>
                        </div>
                        <div className="my-4">
                            <h3 className="text-info">
                                {product.price} <span className="text-white">جنية</span>
                            </h3>
                        </div>
                        <button className="btn btn-primary px-4 fs-5">أضف للعربة</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ItemDetail
