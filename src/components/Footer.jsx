import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import footerlogo from "../images/mainlogo.png"
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <div className="footer-logo">
                <img src={footerlogo} alt="" />
                <p>Your trusted destination for premium football helmets, pads, facemasks, and accessories — built for safety, performance, and style on the field.</p>
                <ul>
                  <li><Link to=""><FaFacebookSquare /></Link></li>
                  <li><Link to=""><FaInstagram /></Link></li>
                  <li><Link to=""><FaXTwitter /></Link></li>
                  <li><Link to=""><FaYoutube /></Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-links">
                <h4>Quick links </h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">about us</Link></li>
                  <li><Link to="/footballhelmets">football helmets</Link></li>
                  <li><Link to="/footballshoulderpads">football shoulder pads</Link></li>
                  <li><Link to="/footballfacemasks">face mask </Link></li>
                  <li><Link to="/partsaccessories">Parts & accessories</Link></li>
                  <li><Link to="/contact">contact us</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className="footer-links">
                <h4>Other Links </h4>
                <ul>
                  <li><Link to="/privacypolicy">privacy policy</Link></li>
                  <li><Link to="/termsconditions">Terms & Conditions</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={8}>
              <div className="footer-end">
                <h4>Newsletter</h4>
                <input type="email" name="" id="" placeholder='Enter your email' />
                <button type="submit">send</button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <section className="footer-copyright">
        <p>Copyright © 2024 armorzone All Rights Reserved.</p>
      </section>
    </>
  )
}

export default Footer