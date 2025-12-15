import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Styles/PaymentImp.css';
const PaymentComponent = () => {
  const location = useLocation();
  const { totalPrice, razorpayLoaded } = location.state || {};
  const [loading, setLoading] = useState(false);

  const createOrderId = async () => {
    setLoading(true);
    try {
      const amount = totalPrice * 100; // Convert to smallest currency unit
      const response = await axios.get(`http://localhost:9091/myapp/payment/createOrderId/${amount}`);
      if (response.status === 200) {
        openCheckout(response.data); // Open Razorpay with the order ID
      }
    } catch (error) {
      console.error('Error creating order ID:', error);
    } finally {
      setLoading(false);
    }
  };

  const openCheckout = (orderId) => {
    if (razorpayLoaded && window.Razorpay) { // Check if Razorpay is loaded
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Razorpay key ID
        amount: (totalPrice * 100).toString(),
        currency: 'INR',
        name: 'Digital Lync',
        description: 'Test Transaction',
        order_id: orderId,
        theme: { color: '#004A55' },
        handler: function (response) {
          console.log('Payment Success:', response);
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
      };
      // console.log(process.env.REACT_APP_RAZORPAY_KEY_ID);
      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        console.error('Payment Failed:', response.error);
      });
      rzp1.open();
    } else {
      console.error('Razorpay is not loaded');
    }
  };

  return (
    <div className='container'>
      <h2 className='text-center'>Checkout</h2>
      <div className='col-sm text-center'>
      <p>Total Price: ₹{totalPrice}</p>
      <button  className="checkout-button" onClick={createOrderId} disabled={!razorpayLoaded}>
        {loading ? 'Processing...' : 'Checkout'}
      </button>
      </div>
    </div>
  );
};
export default PaymentComponent;


