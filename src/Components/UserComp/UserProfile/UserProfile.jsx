import React, { useState } from 'react';
import styles from './UserProfile.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';
import { useNavigate } from 'react-router-dom';

function UserProfile() {

  const [users, setUsers] = useState([
    { name: "عمر مصطفى", phone: "01212981957", email: "omar@gmail.com" }
  ]);

  return (
    <>
      <Subtitle catig="الصفحة الشخصية" />
      
      {users.map((user) => (
        <div className={`p-3 my-3 text-white rounded-2 ${styles.content}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-8">
                <h3>الاسم : <span className="mx-2">{user.name}</span></h3>
                <h4 className='my-3'>رقم الهاتف : <span className="mx-2">{user.phone}</span></h4>
                <h4>الايميل : <span className="mx-2">{user.email}</span></h4>
              </div>
              <div className="col-lg-2 col-md-4 text-info">
                <a className="text-white add" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i className="fs-4 float-start me-3 fa-regular fa-pen-to-square"></i>
                </a>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <form id="add-form">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <div className={`p-3 ${styles.content}`}>
                            <Subtitle catig="تعديل الصفحة الشخصية" />
                            <div className={`w- rounded-2 ح-3 ${styles.content}`}>
                              <input type="text" placeholder='عمر مصطفى' className="form-control" />
                              <input type="number" placeholder='01212981957' className="form-control my-3" />
                              <input type="email" placeholder='omar@gmail.com' className="form-control" />
                              <button className="btn btn-primary px-3 mt-3 fs-5 float-start">حفظ كلمة السر</button>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      <Subtitle catig="تغيير كلمة السر" />

      <div className={`w-75 rounded-2 p-3 ${styles.content}`}>
        <input type="password" placeholder='كلمة السر القديمة' className="form-control" />
        <input type="password" placeholder='كلمة السر الجديدة' className="form-control my-3" />
        <input type="password" placeholder='أعد ادخال كلمة السر الجديدة' className="form-control" />
        <button className="btn btn-primary px-5 mt-3 fs-5 float-start">حفظ كلمة السر</button>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default UserProfile
