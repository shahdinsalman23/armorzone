import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick/lib/slider'

const Testimonials = ({ testimonails }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        responsive: [
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

            <section className="testimonails-sec">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Row>
                                <Slider {...settings}>
                                {testimonails.testimonailCard.map((e, index) => (
                                    <Col lg={6} key={index}>
                                        <div className="testimonail-card">
                                            <img src={e.image} alt="" />
                                            <div className="testimonails-text">
                                                <span>{"⭐".repeat(e.rating)}</span>
                                                <p>{e.testimonial}</p>
                                                <h5>{e.client}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                                </Slider>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <div className="testimonail-head">
                                <img className='testimonail-animate-img' src={testimonails.animateImg} alt="" />
                                <h6>{testimonails.subTitle}</h6>
                                <h2>{testimonails.title}</h2>
                                <Link to="">{testimonails.button}</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Testimonials