import React, { useState } from 'react';
import styles from './Allcategories.module.css';
import catigory1 from "../../images/catigory1.jpg";
import catigory2 from "../../images/catigory2.jpg";
import catigory3 from "../../images/slideItem1.png";
import catigory4 from "../../images/catigory5.jpg";

function Allcategories() {

  const [categories, setCategories] = useState([
    { title: "أحذية رجالي", img: catigory1 },
    { title: "ملابس رجالي", img: catigory4 },
    { title: "ساعات", img: catigory3 },
    { title: "أحذية حريمي", img: catigory2 },
    { title: "شنط", img: catigory1 },
    { title: "أحذية رجالي", img: catigory1 },
    { title: "ملابس رجالي", img: catigory4 },
    { title: "ساعات", img: catigory3 },
    { title: "أحذية حريمي", img: catigory2 },
    { title: "شنط", img: catigory1 },
  ]);

  return (
    <>
      <div className="container">
        <div className="row">
          {categories.map((categorie, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className={`p-3 my-3 ${styles.cateCart}`}>
                <img
                  className="w-100"
                  src={categorie.img}
                  alt="catigory image"
                />
                <h3 className="fs-2 text-center text-white mt-3">
                  {categorie.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Allcategories
