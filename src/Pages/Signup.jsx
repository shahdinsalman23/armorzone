import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SignupForm from '../components/SignupForm'
import InnerBanner from '../components/InnerBanner'

const Signup = () => {
    return (
        <>
         <InnerBanner title="Signup Form"/>
            <section className="sign-up-sec">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={4}>
                            <div className="armorzone-signup-form">
                                <div className="signup-form-head">
                                    <h6>Sign Up</h6>
                                </div>
                                <SignupForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Signup