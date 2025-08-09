import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import loginUserImg from '../images/loginuser.png';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import SearchBar from './SearchBar';
import { FiMenu, FiX } from 'react-icons/fi'; 


const Header = ({ header }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  

  const handleLogout = async (e) => {
    await signOut(auth);
    navigate('/login');
  }

  return (
    <>

      <header className='header-main'>
        <Container>
          <Row>
            <Col lg={1} md={4} sm={4} xs={4}>
              <div className="header-logo">
                <Link to="/"><img src={header.logo} alt="logo" /></Link>
              </div>
            </Col>
            <Col lg={9} className="d-lg-block d-sm-none d-none">
              <div className="header-nav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/footballhelmets">Football Helmets</Link></li>
                  <li><Link to="/footballshoulderpads">Football Shoulder Pads</Link></li>
                  <li><Link to="/footballfacemasks">Face Masks</Link></li>
                  <li><Link to="/partsaccessories">Parts & Accessories</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={8} sm={8} xs={8}>
              <div className="header-end">
                <ul>
                  <li className='search-main'>
                    <button className="search-toggle" onClick={() => setShowSearch(!showSearch)}>{<header.icons.searchIcon />}</button>
                    {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
                  </li>
                  <li className="cart-icon-with-count" onClick={() => setIsCartOpen(true)}>
                    <span className='shopping-bag-icon'>{<header.icons.shoppingBagIcon />}</span>
                    <span className="cart-count">{getCartCount()}</span>
                  </li>
                  <li>
                    {user ? (
                      <div className="user-dropdown" onClick={() => setOpen(!open)}>
                        <img
                          src={user?.photoURL ? user.photoURL : loginUserImg}
                          alt="User"
                        />
                        {open && (
                          <div className="dropdown-menus">
                            <button onClick={handleLogout}>Logout</button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link to="/login">{<header.icons.userIcon />}</Link>
                    )}
                  </li>
                  <li className="d-lg-none">
                    <button
                      className="hamburger-btn"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <FiMenu size={24} />
                    </button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </header>



      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="header-logo">
                <img src={header.logo} alt="" />
          </div>
          <button onClick={() => setMobileMenuOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        <ul>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/footballhelmets" onClick={() => setMobileMenuOpen(false)}>Football Helmets</Link></li>
          <li><Link to="/footballshoulderpads" onClick={() => setMobileMenuOpen(false)}>Football Shoulder Pads</Link></li>
          <li><Link to="/footballfacemasks" onClick={() => setMobileMenuOpen(false)}>Face Masks</Link></li>
          <li><Link to="/partsaccessories" onClick={() => setMobileMenuOpen(false)}>Parts & Accessories</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>


      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}



export default Header