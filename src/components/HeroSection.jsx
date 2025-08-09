import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider'
import ArmorWhiteMarquee from './ArmorWhiteMarquee';
import Marquee from 'react-fast-marquee';

const HeroSection = ({ heroSection }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
      };    
  return (
    <>
        <section className="first-banner-sec">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="first-banner-text">
                <h5>{heroSection.subTitle}</h5>
                <h2>{heroSection.title}<span>{heroSection.spanTag}</span>
                </h2>
                <p>{heroSection.paragraph}</p>
                <Link to="/partsaccessories" className="theme-btn">{heroSection.button}</Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="first-banner-slider">
                <Slider {...settings}>
                  <div className="firstbanner-img">
                    <img src={heroSection.imageSlider.imageOne} alt="" />
                  </div>
                  <div className="firstbanner-img">
                    <img src={heroSection.imageSlider.imageTwo} alt="" />
                  </div>
                  <div className="firstbanner-img">
                    <img src={heroSection.imageSlider.imageThird} alt="" />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
        <Marquee direction="right"><ArmorWhiteMarquee /></Marquee>
      </section>
    </>
  )
}

export default HeroSection