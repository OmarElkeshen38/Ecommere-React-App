import React from 'react';
import styles from './Header.module.css';
import slideItem1 from '../../../images/slideItem1.png';
import slideItem2 from '../../../images/slideItem2.jpg';
import slideItem4 from '../../../images/slideItem4.jpg';

function Header() {
  return (
    <>
        <header className={styles.home}>
            <div className={`${styles.bgLayer}`}>
                <div className="container h-100">
                    <div className="row d-flex align-items-center h-100">
                        <div className={`${styles.headerContent} py-5 col-md-6 col-lg-6`}>
                            <h1>استمتع بأفضل العروض والمنتجات بأقل الأسعار</h1>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide relative py-3 d-block col-md-6 col-lg-6" data-bs-ride="carousel">
                            <div className="carousel-indicators bg-dark">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner rounded-3">
                                <div className="carousel-item active rounded-3">
                                    <img src={slideItem1} className="d-block w-100 rounded-3" alt="..." />
                                </div>
                                <div className="carousel-item rounded-3">
                                    <img src={slideItem2} className="d-block w-100 rounded-3" alt="..." />
                                </div>
                                <div className="carousel-item rounded-3">
                                    <img src={slideItem4} className="d-block w-100 rounded-3" alt="..." />
                                </div>
                            </div>
                            <button className={`${styles.carouselPrev} m-3`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className={`${styles.carouselNext} m-3`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
