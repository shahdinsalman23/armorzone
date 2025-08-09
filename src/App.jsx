import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"
import landingPageData from "./constant/webData"
import ContactUs from './Pages/ContactUs';
import { ToastContainer } from 'react-toastify';
import FootballHelmets from './Pages/FootballHelmets';
import FootbalShoulderPad from './Pages/FootbalShoulderPad';
import FootballFacemasks from './Pages/FootballFacemasks';
import PartsAccessories from './Pages/PartsAccessories';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ProductDetail from './Pages/ProductDetail';
import footballfacemask from './constant/footballfacemask'
import footballHelmetsData from './constant/footballHelmatData'
import footballShoulderPadsData from './constant/footballShoulderPadsData'
import partsAccessories from './constant/partsAccessories'
import CheckoutPage from './Pages/CheckoutPage';


  const allProducts = [
      ...footballfacemask.products,
      ...footballHelmetsData.products,
      ...footballShoulderPadsData.products,
      ...partsAccessories.products,
    ];


const App = () => {
    const { header , heroSection, aboutSection, shopByCategory, brandSec, customUniform, sellingProduct, testimonails, getIntouch } = landingPageData;

  return (
    <>
    <Header header={header}/>
    <Routes>
      <Route path="/" element={<Home heroSection={heroSection}  aboutSection={aboutSection} shopByCategory={shopByCategory} brandSec={brandSec} customUniform={customUniform} sellingProduct={sellingProduct} testimonails={testimonails} />} />
      <Route path="/about" element={<About aboutSection={aboutSection} brandSec={brandSec}  testimonails={testimonails}/>} />
      <Route path="/footballhelmets" element={<FootballHelmets />} />
      <Route path="/footballshoulderpads" element={<FootbalShoulderPad />} />
      <Route path="/footballfacemasks" element={<FootballFacemasks />} />
      <Route path="/partsaccessories" element={<PartsAccessories />} />
      <Route path="/productdetail/:id" element={<ProductDetail  products={allProducts}   customUniform={customUniform} testimonails={testimonails} />} />
      <Route path="/checkout" element={<CheckoutPage  />} />
      <Route path="/contact" element={<ContactUs getIntouch={getIntouch}  testimonails={testimonails} />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsconditions" element={<TermsConditions />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <ToastContainer />
    <Footer/>
    </>
  )
}
  
export default App