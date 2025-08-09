import React from 'react'
import InnerBanner from '../components/InnerBanner'
import termsData from "../constant/termsConditions";
import { Col, Container, Row } from 'react-bootstrap';

const TermsConditions = () => {
    return (
        <>

            <InnerBanner title="Terms & Conditions" />
            <section className="terms-conditions-sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="termsconditions-date">
                                <p><em>Last Updated: {termsData.lastUpdated}</em></p>
                            </div>
                            <div className='termsconditions-txt'>
                                {termsData.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <h2>{section.heading}</h2>
                                        <p>{section.content}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default TermsConditions