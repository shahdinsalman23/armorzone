import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const InnerBanner = ({ title }) => {
  return (
    <>
        <section className="innerbanner-sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="innerbanner-txt">
                            <h2>{title}</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default InnerBanner