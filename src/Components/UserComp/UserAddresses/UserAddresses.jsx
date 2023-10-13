import React, { useState } from 'react';
import Subtitle from '../../Utilities/Subtitle/Subtitle';
import styles from './UserAddressess.module.css';
import { useNavigate } from 'react-router-dom';

function UserAddresses() {

  const [addressess, setAddress] = useState([
    { place: "العمل", address: "الحي الأول - أكتوبر", phone: '01212981957' },
    { place: "المنزل", address: "طنطا - الغربية", phone: '01018635346' },
    { place: "المنزل", address: "طنطا - الغربية", phone: '01018635346' },
  ]);

  const navigate = useNavigate();

  function goToEditAddress() {
    navigate("/user/edit-address");
  }

  function goToAddAddress() {
    navigate("/user/add-address");
  }

  return (
    <>
      <Subtitle catig="دفتر العناويين" />
      {addressess.map((address) => (
        <div className={`p-3 my-3 text-white rounded-2 ${styles.content}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-8">
                <h3>{address.place}</h3>
                <div className="my-2">
                  <h4>
                    العنوان : <span className="mx-2">{address.address}</span>
                  </h4>
                  <h4>
                    الهاتف : <span className="mx-2">{address.phone}</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 text-info">
                <i onClick={goToEditAddress} className="fs-4 float-start me-3 fa-regular fa-pen-to-square"></i>
                <i className="fs-4 float-start fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="my-3 d-flex justify-content-center">
        <button onClick={goToAddAddress} className="btn btn-primary px-4 fs-5">أضافة عنوان جديد</button>
      </div>
    </>
  );
}

export default UserAddresses
