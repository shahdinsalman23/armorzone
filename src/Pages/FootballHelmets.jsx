import InnerBanner from "../components/InnerBanner"
import Products from './../components/Products';
import footballHelmetsData from "../constant/footballHelmatData";

const FootballHelmets = () => {
  return (
    <>
      <InnerBanner title="Football Helmets"/>
      <Products products={footballHelmetsData.products} /> 
    </>
  )
}

export default FootballHelmets