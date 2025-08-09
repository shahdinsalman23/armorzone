import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick/lib/slider';

const Brand = ({ brandSec }) => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        responsive: [
            {
            breakpoint: 768, 
            settings: {
                slidesToShow: 3,
            }
            },
            {
            breakpoint: 600, 
            settings: {
                slidesToShow: 1,
            }
            }
        ]
      };
  return (
    <>
        <section className="brand-sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="brand-head">
                            <h6>{brandSec.subTitle}</h6>
                            <h2>{brandSec.title}</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Slider {...settings}>
                    {brandSec.brands.map((e, index) => (
                        <Col lg={2} md={4} key={index}>
                            <div className="brand-logo">
                                <img src={e.brandLogo} alt="" />
                            </div>
                        </Col>
                    ))}
                </Slider>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Brand