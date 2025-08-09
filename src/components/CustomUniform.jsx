import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomUniform = ({ customUniform }) => {
  return (
    <>
        <section className="custom-uniform-sec">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="custom-uniform-txt">
                            <h6>{customUniform.subTitle}</h6>
                            <h2>{customUniform.title}</h2>
                            <p>{customUniform.paragraph}</p>
                            <Link to="" className='theme-light'>{customUniform.button}</Link>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="custom-uniform-img">
                            <img src={customUniform.image} alt="" />
                            <img className="custom-absltimg" src={customUniform.imageTwo} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default CustomUniform