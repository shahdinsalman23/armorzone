import React from 'react'
import InnerBanner from '../components/InnerBanner'
import Products from '../components/Products'
import partsAccessories from "../constant/partsAccessories";

const PartsAccessories = () => {
    return (
        <>
            <InnerBanner title="Parts & Accessories" />
            <Products products={partsAccessories.products} />
        </>
    )
}

export default PartsAccessories