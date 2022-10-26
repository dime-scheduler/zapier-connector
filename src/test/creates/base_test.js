const createBundle = (input) => ({
    authData: {
        'Ocp-Apim-Subscription-Key': process.env.OCP_APIM_SUBSCRIPTION_KEY,
        'ds-uri': process.env.DS_URI,
        'ds-user': process.env.DS_USER,
        'ds-password': process.env.DS_PASSWORD,
        oauth_consumer_key: process.env.OAUTH_CONSUMER_KEY,
        oauth_consumer_secret: process.env.OAUTH_CONSUMER_SECRET,
        oauth_token: process.env.OAUTH_TOKEN,
        oauth_token_secret: process.env.OAUTH_TOKEN_SECRET,
    },
    inputData: input
});

module.exports = createBundle;