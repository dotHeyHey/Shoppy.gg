const request = require('request');

class Shoppy {

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    genApi(apiKey) {
        const apiToken = apiKey;
        return apiToken;
    }

    getSingleOrder(ID) {
        return this.makeRequest(`orders/${ID}`, { ID }, body => body.data);
    }

    getOrders() {
        return this.makeRequest('orders', {  }, body => body.data);
    }

    getSingleWebhook(ID) {
        return this.makeRequest(`webhooks/${ID}`, { ID }, body => body.data);
    }

    getWebhooks() {
        return this.makeRequest('webhooks', {  }, body => body.data);
    }

    getSingleFeedback(ID) {
        return this.makeRequest(`feedbacks/${ID}`, { ID }, body => body.data);
    }

    getFeedback() {
        return this.makeRequest('feedbacks', {  }, body => body.data);
    }

    getSingleQuery(ID) {
        return this.makeRequest(`queries/${ID}`, { ID }, body => body.data);
    }

    getQueries() {
        return this.makeRequest('queries', {  }, body => body.data);
    }

    makeRequest(endpoint, params = {}, manipulator) {
        if (arguments.length === 2 && typeof(params) === 'function') {
            manipulator = params;
            params = {};
          }

        return new Promise((resolve, reject) => {
            request({
                url: `https://shoppy.gg/api/1.0/${endpoint}`,
                json: true,
                gzip: true,
                headers: {
                    'Authorization': `${this.genApi(this.apiKey)}`,
                    'User-Agent': `username - localhost`
                }
            }, (err, res, body) => {
                if (err || body.status !== 'success') {
                    reject(err || body);
                    return;
                }

                if(typeof(manipulator) === 'function') {
                    resolve(manipulator(body));
                } else {
                    resolve(body);
                }
            });
        });
    }
}

module.exports = Shoppy;