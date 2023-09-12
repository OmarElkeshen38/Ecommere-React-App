import React from 'react';
import styles from './Subtitle.module.css';

function Subtitle(props) {
  return (
    <>
      <div className="container">
        <div className={`${styles.lines} my-3 w-100`}>
          <span></span>
          <div></div>
          <span></span>
        </div>
        <div className="d-flex justify-content-between text-white py-3">
          <h2 className="fs-1">{props.catig}</h2>
          <a href={props.link} className={`${styles.btnColor} btn btn-Color fs-3 py-1 px-4`}>مشاهده الكل</a>
        </div>
      </div>
    </>
  )
}

export default Subtitle
