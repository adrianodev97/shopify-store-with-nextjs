import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'workspace-dynatoddy.myshopify.com',
    storefrontAccessToken: 'a082eadc9fa17e5e5554d22fe19ed642',
});

export default client;