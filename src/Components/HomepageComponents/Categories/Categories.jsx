import React, { useState } from 'react';
import styles from './Categories.module.css';
import catigory1 from '../../../images/catigory1.jpg';
import catigory2 from '../../../images/catigory2.jpg';
import catigory3 from '../../../images/slideItem1.png';
import catigory4 from '../../../images/catigory5.jpg';
import Subtitle from '../../HomepageComponents/Subtitle/Subtitle';

function Categories() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const [categories, setCategories] = useState([
        { title: 'أحذية رجالي', img: catigory1 },
        { title: 'ملابس رجالي', img: catigory4 },
        { title: 'ساعات', img: catigory3 },
        { title: 'أحذية حريمي', img: catigory2 },
        { title: 'شنط', img: catigory1 }
    ]);
    let cate = categories.slice(0, 4);

  return (
    <>
        <div className="container my-5">
            <Subtitle catig='التصنيفات' link='/allCategories' />
            <div className="row">
                  {cate.map((categorie, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className={`p-3 my-2 ${styles.cateCart}`}>
                            <img className='w-100' src={categorie.img} alt="catigory image" />
                            <h3 className='fs-2 text-center text-white mt-3'>{categorie.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Categories





    // < img src = { catigory4 } className = "d-block h-100 w-auto mx-auto" alt = "..." />