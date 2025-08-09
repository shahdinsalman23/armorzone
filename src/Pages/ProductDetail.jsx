
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import InnerBanner from "../components/InnerBanner";
import CustomUniform from "../components/CustomUniform";
import Testimonials from "../components/Testimonials";

const ProductDetail = ({ products, customUniform, testimonails }) => {

    const { id } = useParams();
    const { addtocart } = useCart();
    const product = products.find((item) => item.id.toString() === id)

    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        addtocart({ ...product, quantity });
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (

        <>
            <InnerBanner title="Product Detail" />
            <section className="product-detail-page">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="product-img">
                                <img src={product.image} alt={product.title} className="img-fluid"/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="product-detail-txt">
                                <h2>{product.title}</h2>
                                <h6><strong>Price:</strong>  ${product.price}.00</h6>
                                <p>{product.description}</p>
                                <div className="card-counter">
                                    <button onClick={decreaseQty}>-</button>
                                    <span className="count-number">{quantity}</span>
                                    <button onClick={increaseQty}>+</button>
                                </div>
                                <button onClick={handleAddToCart} className="theme-btn">Add to Cart</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <CustomUniform  customUniform={customUniform}  />
            <Testimonials  testimonails={testimonails} />
        </>
    );
};

export default ProductDetail;
