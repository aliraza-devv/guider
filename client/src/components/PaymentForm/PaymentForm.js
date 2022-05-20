import { useState } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';

import './PaymentForm.css';
import HeadingSecondary from '../UI/HeadingSecondary';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#28a654",
			color: "#333",
			fontWeight: 500,
			fontFamily: "lato ,Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#28a654" },
			"::placeholder": { color: "#28a654" }
		},
		invalid: {
			iconColor: "#ff0000",
			color: "#ff0000"
		}
	}
}

const PaymentForm = props => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if(!error) {
            try {
                const {id} = paymentMethod;
                const response = await axios.post('http://localhost:8000/subscribe', {
                    amount: 100,
                    id
                });
    
                if(response.data.success) {
                    console.log('Payment Successful');
                    setSuccess(true);
                }
    
            } catch(er) {
                console.log(er);
            }
        } else {
            console.log(error.message);
        }
    }
    
    return (
        <>
            {!success ? (
                <form onSubmit={handleSubmit} className='u-center-text'>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS}/>
                        </div>
                    </fieldset>
                    <button type='submit' className='btn btn--green'>Pay</button>
                </form>
                )
                :
            <div>
                <HeadingSecondary text='Payment Successful.' class='u-center-text' />
            </div> 
            }
        </>   
    );
}

export default PaymentForm;