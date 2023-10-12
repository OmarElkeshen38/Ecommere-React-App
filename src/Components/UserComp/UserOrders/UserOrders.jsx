import React, { useState } from 'react';
import styles from './UserOrders.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';
import orderImg1 from "../../../images/catigory1.jpg";
import orderImg2 from "../../../images/catigory2.jpg";
import orderImg3 from "../../../images/catigory5.jpg";

function UserOrders() {

  const [orders, setOrders] = useState([
    {id: 1, image: orderImg1, desc: "وصف المنتج دا انه جامد جدا ومفيش زيه وتوحفه بص انت يو شود تختاره حرفيا جامد جدا ومفيش زيه وتوحفه بص انت يو شود تختاره حرفيا", amount: 8},
    {id: 2, image: orderImg2, desc: "وصف المنتج دا انه جامد جدا ومفيش زيه وتوحفه بص انت يو شود تختاره حرفيا جامد جدا ومفيش زيه وتوحفه بص انت يو شود تختاره حرفيا", amount: 5},
    {id: 3, image: orderImg3, desc: "وصف المنتج دا انه جامد جدا ومفيش زيه وتوحفه بص انت يو شود تختاره حرفيا جامد جدا ومفيش زيه وتوحفه بص انت يو شود تختاره حرفيا", amount: 1},
  ]);


  return (
    <>
      <Subtitle catig="مرحبا عمر مصطفى" />
      <div className={`p-3 text-white rounded-2 ${styles.content}`}>
        <div className="my-2">
          <p className='fs-5'>الطلب رقم #21562498</p>
          <div className="container">
            <div className="row">
              {orders.map((order) => (
                <>
                  <div className="col-lg-2 col-md-4 my-2">
                  <img src={order.image} className="w-100" alt="" />
                </div>
                <div className="col-lg-10 col-md-8 my-2">
                  <h4 className="fs-5">{order.desc}</h4>
                  <h4 className='my-3'>الكمية : <span className='border px-3 fs-5 py-1'>{order.amount}</span></h4>
                </div>
              </>
              ))}
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 my-3 d-flex justify-content-center gap-3">
        <button className='btn btn-info px-5 fs-5'>السابق</button>
        <button className='btn btn-info px-5 fs-5'>التالي</button>
      </div>
    </>
  );
}

export default UserOrders
