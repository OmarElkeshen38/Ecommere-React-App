import React, { useState } from 'react';
import styles from './ManageProducts.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';
import catigory1 from "../../../images/catigory1.jpg";
import catigory2 from "../../../images/catigory2.jpg";
import catigory3 from "../../../images/slideItem1.png";
import catigory4 from "../../../images/catigory5.jpg";
import { Link } from 'react-router-dom';

function ManageProducts() {

  const [products, setProducts] = useState([
        {
            index: "0",
            categ: "أحذية رجالي",
            title: "اير جوردن",
            price: "800",
            rate: "4.4",
            img: catigory1,
        },
        {
            index: "1",
            categ: "ملابس رجالي",
            title: "شورت اسود",
            price: "420",
            rate: "4.5",
            img: catigory4,
        },
        {
            index: "2",
            categ: "ساعات",
            title: "ساعة رولكس",
            price: "2100",
            rate: "4.7",
            img: catigory3,
        },
        {
            index: "3",
            categ: "أحذية حريمي",
            title: "هيلز أزرق",
            price: "700",
            rate: "4.5",
            img: catigory2,
        },
        {
            index: "4",
            categ: "ساعات",
            title: "ساعة رولكس",
            price: "2100",
            rate: "4.7",
            img: catigory4,
        },
        {
            index: "5",
            categ: "ساعات",
            title: "ساعة رولكس",
            price: "2100",
            rate: "4.7",
            img: catigory3,
        },
    ]);

  return (
    <div>
      <div className="rounded-2">
        <Subtitle catig="ادارة جميع المنتجات" />
        <div className="row">
          {products.map((product, index) => (
              <div className="col-lg-4 col-md-6 my-2">
                  <div key={index} className={`${styles.product}`}>
                    <div className="d-flex justify-content-between">
                      <Link className='btn text-white fs-5'>ازالة</Link>
                      <Link className='btn text-white fs-5'>تعديل</Link>
                    </div>
                      <img className="w-100" src={product.img} alt="product" />
                      <div className="my-2 px-3">
                          <h3 className="fs-4">{product.categ}</h3>
                          <div className="d-flex justify-content-between align-items-center">
                              <h2 className="fs-3">{product.title}</h2>
                              <i
                                  className={`${styles.cartIcon} fa-solid fa-bag-shopping fs-5`}
                              ></i>
                          </div>
                      </div>
                      <div className="d-flex justify-content-between px-3">
                          <h3 className="fs-4">{product.price}EGP</h3>
                          <div className="rate d-flex align-item-center">
                              <i className="fa-solid fa-star fs-4 mx-2"></i>
                              <h3 className="fs-4">{product.rate}</h3>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
          ;
      </div>
      </div>
    </div>
  );
}

export default ManageProducts
