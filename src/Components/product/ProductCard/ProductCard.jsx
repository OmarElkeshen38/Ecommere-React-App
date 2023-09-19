import React from "react";
import cardImg1 from "../../../images/item-1.jpg";
import cardImg2 from "../../../images/item-4.jpg";
import cardImg3 from "../../../images/item-5.jpg";

function ProductCard() {
    return (
        <>
            <div className="col-lg-4">
                <div
                    id="carouselExampleAutoplaying"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner rounded-3">
                        <div className="carousel-item active">
                            <img src={cardImg1} className="d-block w-100 rounded-3" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={cardImg2} className="d-block w-100 rounded-3" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={cardImg3} className="d-block w-100 rounded-3" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
