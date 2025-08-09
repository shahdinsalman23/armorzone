import React from 'react'
import InnerBanner from '../components/InnerBanner'
import { Col, Container, Row } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <>
        <InnerBanner title="Login Form"/>
        <section className="login-form-sec">
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={4} md={8}>
                        <div className="armorzone-login-form">
                            <div className="login-form-head">
                                <h6>Sign In</h6>
                            </div>
                            <LoginForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Login