import React from 'react'
import ProductCard from '../../Components/product/ProductCard/ProductCard';
import ItemDetail from '../../Components/product/ItemDetail/ItemDetail';
import Subtitle from '../../Components/Utilities/Subtitle/Subtitle';
import RateComments from '../../Components/product/Rate&Comments/RateComments';
import SlideProducts from '../../Components/product/SlideProducts/SlideProducts';

function ProductPage() {
    return (
        <>
            <div className="container">
                <div className="my-5">
                    <div className="row">
                        <ProductCard />
                        <ItemDetail />
                    </div>
                    <div className="my-3">
                        <Subtitle catig="التقييمات" />
                        <RateComments />
                    </div>
                    <div className="my-4">
                        <Subtitle catig="منتجات قد تعجبك" />
                        <SlideProducts />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage
