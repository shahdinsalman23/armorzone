import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, updateQty, removeFromCart, getCartTotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h4>Your Cart</h4>
        <FaTimes className="close-icon" onClick={onClose} />
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-info">
                <img src={item.image} alt={item.title} />
                <div className='addtocart-sidebar-data'>
                  <h5>{item.title}</h5>
                  <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="card-counter-sidebar">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
              <FaTrash className="delete-icon" onClick={() => removeFromCart(item.id)} />
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total Cost:</span>
          <span>${getCartTotal()}</span>
        </div>
        <Link to="/checkout" className="checkout-btn">Checkout</Link>
      </div>
    </div>
  );
};

export default CartSidebar;
