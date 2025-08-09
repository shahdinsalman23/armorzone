import React from 'react'
import InnerBanner from '../components/InnerBanner'
import Products from '../components/Products'
import footballfacemask from "../constant/footballfacemask";

const FootballFacemasks = () => {
  return (
    <>
      <InnerBanner title="Football Shoulder Pads"/>
      <Products products={footballfacemask.products} /> 
    </>
  )
}

export default FootballFacemasks