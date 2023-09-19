import React, { useState } from 'react';
import styles from './BrandsCointer.module.css';
import Subtitle from '../../Utilities/Subtitle/Subtitle';
import NikeLogo from '../../../images/nike-logo.jpg';
import DefactoLogo from '../../../images/defacto-logo.jpg';
import Lines from '../../Utilities/Lines/Lines';

function BrandsCointer() {

    const [brands, setBrands] = useState([
        { id: '0', title: 'NIKE', img: NikeLogo, desc:'شاهد كل منتجات NIKE' },
        { id: '1', title: 'Defacto', img: DefactoLogo, desc:'شاهد كل منتجات Defacto' },
        { id: '2', title: 'NIKE', img: NikeLogo, desc:'شاهد كل منتجات NIKE' },
        { id: '3', title: 'Defacto', img: DefactoLogo, desc:'شاهد كل منتجات Defacto' },
        { id: '4', title: 'NIKE', img: NikeLogo, desc:'شاهد كل منتجات NIKE' },
        { id: '5', title: 'Defacto', img: DefactoLogo, desc:'شاهد كل منتجات Defacto' },
    ]);

    let homeBrands = brands.slice(0, 4);

  return (
    <>
      <div className="container">
        <div className="my-5">
          <Lines />
          <Subtitle catig="أشهر الماركات" link="/all-brands" btnName='مشاهدة الكل' />
          <div className="row">
            {homeBrands.map((brand) => (
              <div key={brand.id} className="col-lg-3 my-2 col-md-6">
                <div className={`${styles.branBox} rounded p-4`}>
                  <h3 className="p-2 text-white text-center d-flex align-items-center justify-content-center rounded">
                    {brand.desc}
                  </h3>
                  <div className={styles.img}>
                    <img
                      className="w-100 rounded-circle object-fit-cover"
                      src={brand.img}
                      alt="brand image"
                    />
                  </div>
                  <h2 className="text-center text-white mt-4">{brand.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandsCointer
