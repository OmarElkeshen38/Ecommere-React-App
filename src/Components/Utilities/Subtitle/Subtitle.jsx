import React from 'react';
import styles from './Subtitle.module.css';
import { Link } from 'react-router-dom';

function Subtitle(props) {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center text-white py-3">
          <h2 className="fs-2">{props.catig}</h2>
          {props.btnName?(<Link to={props.link} className={`${styles.btnColor} btn btn-Color fs-4 py-1 px-4`}>{props.btnName}</Link>) : null}
        </div>
      </div>
    </>
  )
}

export default Subtitle
