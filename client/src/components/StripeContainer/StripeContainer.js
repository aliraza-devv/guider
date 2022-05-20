import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentForm from '../PaymentForm/PaymentForm';

const PUBLIC_KEY = 'pk_test_51K6YKpHZEKSjfSFAHdLHmp1lAj1mnuXgV9R3mNoaxQ770nSwIdZsnr3r6fqPreGmr2PSKXsDvP3D20my3rkzK1An00Es33jHTe';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    );
}

export default StripeContainer;