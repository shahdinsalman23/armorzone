import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import CartProvider from './context/CartContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51PfEadILwjmHE5tBiDIkDOXGmoUm6DPIrG8zDauG0p8YTLzpddkTCIsneH3locxYgr0F9pt0GtICErcsRSlK9sfh00pio1MTJ1');

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </Elements>
  </BrowserRouter>
)
