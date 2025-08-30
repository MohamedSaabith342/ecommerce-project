import './CheckoutPage.css'
import './checkout-header.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PaymentSummary } from './PaymentSummary';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';


export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {

    const fetchCheckoutData = async () => {
      let response = await axios.get(
      '/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data)


      response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    }

    fetchCheckoutData();

  }, [])
  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>

  );
}