import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types';

const SellingProduct = ({ sellingProduct }) => {
    return (
        <>
            <section className="selling-products-sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="best-selling-head">
                                <img src={sellingProduct.secureIcon} alt="" />
                                <div className="best-selling-txt">
                                    <h6>{sellingProduct.subTitle}</h6>
                                    <h2>{sellingProduct.title} <span>{sellingProduct.spanTag}</span></h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="prodstyling">
                        {sellingProduct.products.map((e, index) => (
                            <Col lg={3} md={6} key={index}>
                                <div className="product-card">
                                    <img src={e.image} alt={e.title} />
                                    <div className="productcard-txt">
                                        <span>{"⭐".repeat(e.rating)}</span>
                                        <h3>{e.title}</h3>
                                        <p>{e.prodDes}</p>
                                        <div className="price-rating">
                                            <h6><span><FaArrowRight /></span> {e.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

SellingProduct.propTypes = {
  sellingProduct: PropTypes.object.isRequired,
};

export default SellingProduct