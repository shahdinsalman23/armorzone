import AboutOurCompany from "../components/AboutOurCompany";
import ShopByCategory from "../components/ShopByCategory";
import Brand from "../components/Brand";
import CustomUniform from "../components/CustomUniform";
import SellingProduct from "../components/SellingProduct";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";

const Home = ({ heroSection, aboutSection, shopByCategory, brandSec, customUniform, sellingProduct, testimonails }) => {
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <AboutOurCompany aboutSection={aboutSection}/>
      <ShopByCategory shopByCategory={shopByCategory}/>
      <SellingProduct  sellingProduct={sellingProduct} />
      <Brand brandSec={brandSec}/>
      <CustomUniform  customUniform={customUniform}/>
      <Testimonials testimonails={testimonails}/>
    </>
  );
};

export default Home;
