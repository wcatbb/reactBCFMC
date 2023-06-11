import GooglePayButton from '@google-pay/button-react';
import { cartTotalSelector, emptyCart } from './cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GooglePay = () => {
    const cartTotal = useSelector(cartTotalSelector).toString();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckout = () => {
        dispatch(emptyCart());
        navigate('/confirm');
    };

    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA']
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example'
                    }
                }
            }
        ],
        merchantInfo: {
            merchantId: 'BCR2DN4TRLTKRADE',
            merchantName: 'Bayou City Federated Music Club'
        },
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: cartTotal,
            currencyCode: 'USD',
            countryCode: 'US'
        },
        callbackIntents: ['PAYMENT_AUTHORIZATION']
    };

    return (
        <GooglePayButton
            environment='TEST'
            buttonType='checkout'
            buttonSizeMode='fill'
            paymentRequest={paymentRequest}
            onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
                handleCheckout();
            }}
            onPaymentAuthorized={() => ({ transactionState: 'SUCCESS' })}
            onError={error => console.error(error)}
            style={{ position: 'absolute', bottom: -25, right: 25 }}
        />
    );
};

export default GooglePay