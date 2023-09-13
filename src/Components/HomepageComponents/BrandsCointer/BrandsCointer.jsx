import React, { useState } from 'react';
import styles from './BrandsCointer.module.css';
import Subtitle from '../Subtitle/Subtitle';
// import ZaraLogo from '../../../images/Zara-Logo.jpg';
import ZaraLogo from '../../../images/Zara-Logo.jpg'; 
import NikeLogo from '../../../images/nike-logo.jpg';
import DefactoLogo from '../../../images/defacto-logo.jpg';
import AdidasLogo from '../../../images/adidas-log.jpg';

function BrandsCointer() {

    const [brands, setBrands] = useState([
        { id: '0', title: 'ZARA', img: ZaraLogo, desc:'شاهد كل منتجات ZARA' },
        { id: '1', title: 'NIKE', img: NikeLogo, desc:'شاهد كل منتجات NIKE' },
        { id: '2', title: 'Defacto', img: DefactoLogo, desc:'شاهد كل منتجات Defacto' },
        { id: '3', title: 'Adidas', img: AdidasLogo, desc:'شاهد كل منتجات Adidas' },
        { id: '4', title: 'Adidas', img: AdidasLogo, desc:'شاهد كل منتجات Adidas' },
        { id: '5', title: 'Adidas', img: AdidasLogo, desc:'شاهد كل منتجات Adidas' },
    ]);

    let homeBrands = brands.slice(0, 4);

  return (
    <>
      <div className="container">
        <div className="my-5">
            <Subtitle catig='أشهر البراندات' link='AllProducts' />
            <div className="row">
                {homeBrands.map((brand) => (
                    <div key={brand.id} className="col-lg-3 my-2 col-md-6">
                        <div className={`${styles.branBox} rounded p-4`}>
                            <h3 className='p-2 text-white text-center d-flex align-items-center justify-content-center rounded'>{brand.desc}</h3>
                            <img className='w-100 rounded-circle' src={brand.img} alt="" />
                            <h2 className='text-center text-white mt-4'>{brand.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  )
}

export default BrandsCointer
