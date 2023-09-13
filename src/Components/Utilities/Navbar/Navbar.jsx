import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark py-2 sticky-top ${styles.navBg}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <h2><i className="fa-solid fa-cart-shopping"></i> بوابة التسوق</h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-evenly w-100 mb-2 mb-lg-0">
                            <input className='form-control w-75 py-2' placeholder='البحث عن منتجات ...' type="text" name="" id="" />
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold" aria-current="page" to="/login">الدخول <i className="mx-1 fa-solid fa-right-to-bracket"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-bold" to="/cart">العربة <i className="mx-1 fa-solid fa-cart-arrow-down"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
