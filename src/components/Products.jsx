import { Col, Container, Row } from "react-bootstrap"
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Products = ({ products }) => {


    if (!Array.isArray(products)) {
        return <p>Products data is not an array.</p>;
    }
  return (
    <section className="product-pg-sec">
            <Container>
                <Row>
                    {products.map((item) => (
                        <Col lg={3} md={4} sm={6} key={item.id}>
                        <div className="inner-product-card">
                            <img src={item.image} alt={item.title} />
                            <span>{"⭐".repeat(item.rating)}</span>
                            <h3>{item.title}</h3>
                            <p>${item.price}.00</p>
                             <Link to={`/productdetail/${item.id}`} className="theme-btn">View Details</Link>
                        </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
  )
}

export default Products