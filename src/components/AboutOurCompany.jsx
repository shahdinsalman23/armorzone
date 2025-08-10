import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import ArmorBlackMarquee from './ArmorBlackMarquee'

const AboutOurCompany = ({ aboutSection }) => {
  return (
    <>

        <section className="aboutcompany-sec">
            <Marquee><ArmorBlackMarquee /></Marquee>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="aboutcompany-img">
                            <img src={aboutSection.aboutCompany} alt="" />
                            <img src={aboutSection.helmetImg} className='abouthelmetimg' alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="aboutcompany-text">
                            <img src={aboutSection.guardIcon} alt="" />
                            <h5>{aboutSection.AboutHead}</h5>
                            <h2>{aboutSection.AboutCompanyHead} <span>{aboutSection.AboutCompanySpan}</span></h2>
                            <p>{aboutSection.firstParagraph}</p>
                            <p>{aboutSection.secondParagraph}</p>
                            <Link to="" className='theme-btn'>{aboutSection.button}</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    
    </>
  )
}

export default AboutOurCompany