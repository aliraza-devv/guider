const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');

const api = require('./routes/api');
const unAuthApi = require('./routes/unAuthApi');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

const verifyJwt = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-it6ek9g5.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'Unique',
    issuer: 'https://dev-it6ek9g5.us.auth0.com/',
    algorithms: ['RS256']
});

app.post('/subscribe', cors(), async (req,res) => {
    let {amount, id} = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Donation',
            payment_method: id,
            confirm: true
        })
        console.log('Payment  ', payment);
        res.status(201).json({
            message: 'Payment Successful',
            success: true
        });
    } catch(err) {
        console.log(err);
        res.status(404).json({
            message: 'Payment Not Successful',
            success: false
        });
    }
})

app.use('/guides', unAuthApi);

app.use(verifyJwt);

app.use('/v1', api);

app.use('/*', (req,res) => {
    res.status(200).json('');
});

module.exports = app;