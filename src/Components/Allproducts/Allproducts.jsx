import React, { useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import styles from './Allproducts.module.css';
import catigory1 from "../../images/catigory1.jpg";
import catigory2 from "../../images/catigory2.jpg";
import catigory3 from "../../images/slideItem1.png";
import catigory4 from "../../images/catigory5.jpg";

function Allproducts() {

    const [products, setProducts] = useState([
    { index: '0', categ: 'أحذية رجالي', title: 'اير جوردن', price: '800', rate: '4.4', img: catigory1 },
    { index: '1', categ: 'ملابس رجالي', title: 'شورت اسود', price: '420', rate: '4.5', img: catigory4 },
    { index: '2', categ: 'ساعات', title: 'ساعة رولكس', price: '2100', rate: '4.7', img: catigory3 },
    { index: '3', categ: 'أحذية حريمي', title: 'هيلز أزرق', price: '700', rate: '4.5', img: catigory2 },
    { index: '4', categ: 'ساعات', title: 'ساعة رولكس', price: '2100', rate: '4.7', img: catigory4 },
    { index: '5', categ: 'ساعات', title: 'ساعة رولكس', price: '2100', rate: '4.7', img: catigory3 },
  ]);

  return (
    <div>
      <div className="container">
        <div className="my-5">
          <div className="d-flex justify-content-between mb-2">
            <h4 className="text-white-50">
              نتيجة البحث: <span className="text-white">{products.length}</span>
            </h4>
            <div className="">
              <DropdownButton id="dropdown-item-button" title="الترتيب حسب">
                <Dropdown.Item className="text-center" as="button">
                  الأعلى سعرا
                </Dropdown.Item>
                <Dropdown.Item className="text-center" as="button">
                  الأكثر شهرة
                </Dropdown.Item>
                <Dropdown.Item className="text-center" as="button">
                  الأعلى تقييما
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 bg-dar">
              <div className="p-1">
                <div className="text-white">
                  <h3>الفئة</h3>
                  <div className="">
                    <input type="checkbox" name="cate" />
                    <label className="mx-2 fs-5" htmlFor="cate">ملابس رجالي</label>
                  </div>
                  <div className="">
                    <input type="checkbox" name="cate" />
                    <label className="mx-2 fs-5" htmlFor="cate">ملابس حريمي</label>
                  </div>
                  <div className="">
                    <input type="checkbox" name="cate" />
                    <label className="mx-2 fs-5" htmlFor="cate">ملابس أطفال</label>
                  </div>
                  <div className="">
                    <input type="checkbox" name="cate" />
                    <label className="mx-2 fs-5" htmlFor="cate">ساعات</label>
                  </div>
                  <div className="">
                    <input type="checkbox" name="cate" />
                    <label className="mx-2 fs-5" htmlFor="cate">أحذية رجالي</label>
                  </div>
                </div>
                <div className="text-white my-4">
                    <h3>الماركة</h3>
                    <div className="">
                        <input type="checkbox" name="cate" />
                        <label className="mx-2 fs-5" htmlFor="cate">Nike</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="cate" />
                        <label className="mx-2 fs-5" htmlFor="cate">Zara</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="cate" />
                        <label className="mx-2 fs-5" htmlFor="cate">Defacto</label>
                    </div>
                    <div className="">
                        <input type="checkbox" name="cate" />
                        <label className="mx-2 fs-5" htmlFor="cate">Adidas</label>
                    </div>
                </div>
                <div className="text-white">
                    <h3>السعر</h3>
                    <div className="d-flex justify-content-between">
                        <label className="mx-2 fs-5" htmlFor="cate">من :</label>
                        <input type="number" className='form-control w-50' name="cate" />
                    </div>
                    <div className="d-flex justify-content-between my-2">
                        <label className="mx-2 fs-5" htmlFor="cate">الى :</label>
                        <input type="number" className='form-control w-50' name="cate" />
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="p-1 bg-dar">
                <div className="row">
                  {products.map((product) => (
                    <div className="col-lg-4 col-md-6 p-2">
                      <div
                        key={product.index}
                        className={`p-3 ${styles.product}`}
                      >
                        <img
                          className="w-100"
                          src={product.img}
                          alt="product"
                        />
                        <div className="my-2">
                          <h3 className="fs-4">{product.categ}</h3>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2 className="fs-3">{product.title}</h2>
                            <i
                              className={`${styles.cartIcon} fa-solid fa-bag-shopping fs-5`}
                            ></i>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allproducts
