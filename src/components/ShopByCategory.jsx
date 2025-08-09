import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick/lib/slider';

const ShopByCategory = ({ shopByCategory }) => {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "ease-in-out",
          responsive: [
            {
            breakpoint: 768, 
            settings: {
                slidesToShow: 2,
                centerMode: false, 
            }
            },
            {
            breakpoint: 600, 
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
            }
        ]
    };
    return (
        <>
            <section className="shopby-category-sec">
                <img className='sidewall-img' src={shopByCategory.sideWall} alt="" />
                <img className='catgory-rightsquare' src={shopByCategory.squareRight} alt="" />
                <img className='catgory-leftsquare' src={shopByCategory.squareLeft} alt="" />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="category-head">
                                <h6>{shopByCategory.subTitle}</h6>
                                <h2>{shopByCategory.title}<span>{shopByCategory.spanTag}</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Slider {...settings}>
                            {shopByCategory.categories.map((category, index) => (
                                <Col lg={4} key={index}>
                                    <div className="category-card">
                                        <img src={category.categoryImg} alt={category.categoryTitle} />
                                        <div className="category-txt">
                                            <h3>{category.categoryTitle}</h3>
                                            <p>{category.categoryDescription}</p>
                                            <Link to="">{<category.arrowIcon />}</Link>
                                        </div>
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

export default ShopByCategory