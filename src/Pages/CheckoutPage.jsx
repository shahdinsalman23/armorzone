import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import InnerBanner from '../components/InnerBanner';
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
    const { cartItems, getCartTotal } = useCart();
    const stripe = useStripe();
    const elements = useElements();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsProcessing(true);

        const cardElement = elements.getElement(CardElement);

        // Simulate token creation for demo
        const { error, token } = await stripe.createToken(cardElement);

        if (error) {
            toast.error(error.message);
            setIsProcessing(false);
            return;
        }

        // For demo purposes
        toast.success("Payment successful (simulated)", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
        });

        // Reset form if needed
        setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
        });

        setIsProcessing(false);
    };

    return (
        <>
            <InnerBanner title="Checkout" />
            <section className="checkout-pg">
                <Container className="my-5">
                    <Row>
                        <Col lg={8} md={12}>
                            <div className="payment-details-box">
                                <h4>Payment Details</h4>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="name" className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                                    </Form.Group>

                                    <Form.Group controlId="email" className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                                    </Form.Group>

                                    <Form.Group controlId="phone" className="mb-3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name="phone" value={formData.phone}  onChange={handleChange} placeholder="Enter your phone number" />
                                    </Form.Group>

                                    <Form.Group controlId="address" className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name="address" value={formData.address}  onChange={handleChange}  placeholder="Enter your address" />
                                    </Form.Group>

                                    <Form.Group controlId="cardDetails" className="mb-3">
                                        <Form.Label>Card Information</Form.Label>
                                        <div className="stripe-element-wrapper border rounded p-2">
                                            <CardElement options={{ hidePostalCode: true }} />
                                        </div>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="mt-3" disabled={isProcessing}>
                                        {isProcessing ? "Processing..." : `Pay $${getCartTotal().toFixed(2)}`}
                                    </Button>
                                </Form>
                            </div>
                        </Col>

                        <Col lg={4} md={12} className="mt-4 mt-lg-0">
                            <div className="order-summary">
                                <h4>Order Summary</h4>
                                <div className="order-summary-box">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="order-summary-product">
                                            <div className="order-product-detail">
                                                <h6>{item.title}</h6>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                            <p className='order-product-price'>
                                                Price: ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                    <hr />
                                    <div className="total-amount-txt d-flex justify-content-between mt-3">
                                        <h5>Total:</h5>
                                        <h5>${getCartTotal().toFixed(2)}</h5>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CheckoutPage;
