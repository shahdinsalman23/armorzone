import React from 'react'
import InnerBanner from '../components/InnerBanner'
import Products from '../components/Products'
import footballShoulderPadsData from "../constant/footballShoulderPadsData";

const FootbalShoulderPad = () => {
  return (
    <>
        <InnerBanner title="Football Shoulder Pads"/>
        <Products products={footballShoulderPadsData.products} /> 
    </>
  )
}

export default FootbalShoulderPad