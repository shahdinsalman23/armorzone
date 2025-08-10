import Logo from "../images/logo.png";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoSearchSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import helmet from "../images/helmet.png";
import AboutCompanyImg from '../images/aboutcompanyimg.png'
import AboutHelmet from "../images/abouthelmet.png"
import AboutGuardIcon from "../images/aboutguardicon.png"
import CategoryOneImg from "../images/categoryoneimg.png"
import CategoryTwoImg from "../images/categorytwoimg.png"
import CategoryThreeImg from "../images/categorythreeimg.png"
import { FaArrowRightLong } from "react-icons/fa6";
import  SecureIcon from "../images/secureicon.png"
import ProductOneImg from "../images/prodone.png"
import ProductTwoImg from "../images/prodtwo.png"
import ProductThreeImg from "../images/prodthree.png"
import ProductFourImg from "../images/prodfour.png"
import BrandLogoOne from "../images/brandone.png"
import BrandLogoTwo from "../images/brandtwo.png"
import BrandLogoThree from "../images/brandthree.png"
import BrandLogoFour from "../images/brandfour.png"
import BrandLogoFive from "../images/brandfive.png"
import customUniform from "../images/customuniform.png"
import customUniformbg from "../images/custombackgorundbg.png"
import clientOne from "../images/testiimgone.png"
import clientTwo from "../images/testiimgtwo.png"
import sideWall from "../images/categorysidewall.png"
import SquareRight from "../images/categorysquareright.png"
import SquareLeft from "../images/categorysquareright.png"
import { LuMapPin } from "react-icons/lu";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const landingPageData = {    
    header: {
        logo: Logo,
        icons: {
            searchIcon: IoSearchSharp,  
            shoppingBagIcon: HiOutlineShoppingBag,
            userIcon: FaRegUser,
        },
    },
    
    heroSection: {
        subTitle: "welcome to our website",
        title: "Armor",
        spanTag: "zone",
        paragraph: "Premium football helmets, pads, and accessories designed for ultimate protection, comfort, and performance on the field.",
        imageSlider: {
            imageOne: helmet,
            imageTwo: helmet,
            imageThird: helmet,
        },
        button: "Shop Now"

    },

    aboutSection: {
        subTitle: "About",
        title: "OUR",
        spanTag: "COMPANY",
        firstParagraph: "Armor Zone is dedicated to delivering premium-quality football gear that ensures safety, performance, and style on the field. From professional athletes to passionate beginners, we provide equipment that meets the highest standards of durability and comfort.",
        secondParagraph: "Our commitment to excellence means working with trusted manufacturers, using advanced materials, and continuously innovating to give players the confidence they need to perform their best.",
        aboutCompany: AboutCompanyImg,
        helmetImg: AboutHelmet,
        guardIcon: AboutGuardIcon,
        button: "Read more",
        AboutHead: "About",
        AboutCompanyHead: "Our",
        AboutCompanySpan: "Company",
        CompanyParaOne: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        CompanyParaTwo: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    shopByCategory: {
        subTitle: "Shop",
        title: "By",
        spanTag: "Category",
        sideWall: sideWall,
        squareRight: SquareRight,
        squareLeft: SquareLeft,
        categories: [
            {
                categoryImg: CategoryOneImg,
                categoryTitle: "SHOULDER PADS",
                categoryDescription: "High-impact protection with maximum comfort for every play.",
                arrowIcon: FaArrowRightLong,
            },
            {
                categoryImg: CategoryTwoImg,
                categoryTitle: "SHOULDER PADS",
                categoryDescription: "Engineered for safety, performance, and game-day confidence.",
                arrowIcon: FaArrowRightLong,
            },
            {
                categoryImg: CategoryThreeImg,
                categoryTitle: "SHOULDER PADS",
                categoryDescription: "Durable designs for unmatched visibility and protection.",
                arrowIcon: FaArrowRightLong,
            }
        ]
    },

    sellingProduct: {
        secureIcon: SecureIcon,
        subTitle: "Best",
        title: "Selling",
        spanTag: "Product",
        products: [
            {
                image: ProductOneImg,
                title: "Riddell SpeedFlex",
                prodDes: "Advanced impact protection with superior comfort for game-day performance.",
                price: "$280.00",
                rating: 5,  
            },
            {
                image: ProductTwoImg,
                title: "VICIS ZERO 2",
                prodDes: "Elite-level helmet engineered for maximum safety and field vision.",
                price: "$280.00",
                rating: 5,  
            },
            {
                image: ProductThreeImg,
                title: "Riddell sPX Shoulder Pads",
                prodDes: "Lightweight yet durable pads for unmatched mobility and protection.",
                price: "$280.00",
                rating: 5,  
            },
            {
                image: ProductFourImg,
                title: "Adult Padded Football",
                prodDes: "High-quality padded football for comfort, grip, and lasting durability.",
                price: "$280.00",
                rating: 5,  
            },
        ]
    },    

    brandSec: {
        subTitle: "Armor Zone.",
        title: "BRANDS",
        brands: [
            {
                brandLogo: BrandLogoOne,
            },
            {
                brandLogo: BrandLogoTwo,
            },
            {
                brandLogo: BrandLogoThree,
            },
            {
                brandLogo: BrandLogoFour,
            },
            {
                brandLogo: BrandLogoFive,
            },
            {
                brandLogo: BrandLogoOne,
            },
            {
                brandLogo: BrandLogoTwo,
            },
            {
                brandLogo: BrandLogoThree,
            },
            {
                brandLogo: BrandLogoFour,
            },
            {
                brandLogo: BrandLogoFive,
            },
        ]
    },

    customUniform: {
        subTitle: "Armor Zone.",
        title: "Custom Uniforms",
        paragraph: "At Armor Zone, we specialize in creating high-performance custom football uniforms designed to match your team’s identity and enhance player comfort on the field.",
        button: "learn more",
        image:  customUniform,
        imageTwo: customUniformbg,
    },

    testimonails: {
        animateImg: AboutGuardIcon,
        subTitle: "Testimonial",
        title: "what people think",
        button: "view all",
        testimonailCard : [
            {
                image: clientOne,
                rating: 5,
                testimonial: "“Armor Zone’s gear completely changed the way I play — the helmets are lightweight, comfortable, and built for serious protection. The quality to detail show in every game I’ve played.”",
                client: "- Alex",
            },
            {
                image: clientTwo,
                rating: 5,
                testimonial: "“I’ve tried different brands, but nothing matches the durability and comfort of Armor Zone products. From ordering to delivery, the process was smooth and the results exceeded my expectations.”",
                client: "- Stephen",
            }
        ]
    },
    getIntouch : {
        title: "Get in Touch",
        paragraph: "Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we'll get back to you as soon as possible.",
        officeLocation: [
            {
                icon: LuMapPin,
                heading: "Office Location",
                para: "New york, United State",
            },
            {
                icon: FaEnvelope,
                heading: "Send a Message",
                para: "Info@loremipsum.com",
            },
            {
                icon: FaPhoneAlt ,
                heading: "Call Us Directly",    
                para: "+1 000 000 000",
            },
        ] 
    },
};

export default landingPageData;

