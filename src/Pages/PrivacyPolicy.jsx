import React from 'react'
import InnerBanner from '../components/InnerBanner'
import { Col, Container, Row } from 'react-bootstrap'
import privacyPolicyData from '../constant/Privacypolicy';

const PrivacyPolicy = () => {
    return (
        <>
            <InnerBanner title="Privacy Policy" />
            <section className="privacy-policy-sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="privacypolicy-date">
                                <p><em>Last Updated: {privacyPolicyData.lastUpdated}</em></p>
                            </div>
                            <div className='privacypolicy-txt'>
                                {privacyPolicyData.sections.map((section, idx) => (
                                    <div className='' key={idx}>
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

export default PrivacyPolicy