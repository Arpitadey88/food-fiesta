import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import GlobalApi from '../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { useContext } from 'react';
import { CartContext } from '../../_context/CartContext';
// import { CartContext } from '../../_context/CartContext'

const CheckoutForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useUser();
    const { cart, setCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false);

    const handleError = (error) => {
        setLoading(false);
        setErrorMessage(error.message)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        setLoading(true);
        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError);
            return;
        }
        createOrder();
        sendEmail();
        const res = await fetch("/api/create-intent", {
            method: "POST",
            body: JSON.stringify({
                amount: amount
            })
        })
        const clientSecret = await res.json();
        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            clientSecret: clientSecret,
            elements,
            confirmParams: {
                return_url: "https://food-fiesta-eight.vercel.app/payment-confirm",
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    }
    const createOrder = () => {
        let productIds = [];
        cart.forEach(element => {
            productIds.push(element?.product?.id)
        });
        const data = {
            data: {
                email: user.primaryEmailAddress.emailAddress,
                userName: user.fullName,
                amount: amount,
                products: productIds
            }
        }
        GlobalApi.createOrder(data).then(res => {
            if (res) {
                console.log('order response', res);
                cart.forEach(element => {
                    GlobalApi.deleteUserCartItem(element.id).then(result => {

                    })
                });
            }
        })
    }
    const sendEmail = async () => {
        const res = await fetch("/api/send-email", {
            method: "POST",
            body: JSON.stringify({
                email: user.primaryEmailAddress.emailAddress,
                userName: user.fullName,
                amount: amount,
            })
        })
    }
    console.log("text from sendEmail", sendEmail);
    return (
        <form onSubmit={handleSubmit}>
            <div className='px-32 md:mx-[250px] mt-12'>
                <PaymentElement />
                <button className='bg-blue-500 p-2 text-white rounded-md w-full mt-5 hover:bg-blue-700'>Submit</button>
            </div>


        </form>
    );
};

export default CheckoutForm;