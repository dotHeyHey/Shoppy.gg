const request = require('request');

class Shoppy {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  genApi(apiKey) {
    const apiToken = apiKey;
    return apiToken;
  }

  getOrders() {
    return this.makeRequest('orders', {}, body => body.data);
  }

  getSpecificOrder(ID) {
    return this.makeRequest(`orders/${ID}`, { ID }, body => body.data);
  }

  getProducts() {
    return this.makeRequest('products', {}, body => body.data);
  }

  getSpecificProduct(ID) {
    return this.makeRequest(`products/${ID}`, { ID }, body => body.data);
  }

  getCoupons() {
    return this.makeRequest('coupons', {}, body => body.data);
  }

  getSpecificCoupon(ID) {
    return this.makeRequest(`coupons/${ID}`, { ID }, body => body.data);
  }

  getQueries() {
    return this.makeRequest('queries', {}, body => body.data);
  }

  getSpecificQuery(ID) {
    return this.makeRequest(`queries/${ID}`, { ID }, body => body.data);
  }

  getWebhooks() {
    return this.makeRequest('webhooks', {}, body => body.data);
  }

  getSpecificWebhook(ID) {
    return this.makeRequest(`webhooks/${ID}`, { ID }, body => body.data);
  }

  getFeedback() {
    return this.makeRequest('feedbacks', {}, body => body.data);
  }

  getSpecificFeedback(ID) {
    return this.makeRequest(`feedbacks/${ID}`, { ID }, body => body.data);
  }

  getTickets() {
    return this.makeRequest('tickets', {}, body => body.data);
  }

  getSpecificTicket(ID) {
    return this.makeRequest(`tickets/${ID}`, { ID }, body => body.data);
  }

  getNotifications() {
    return this.makeRequest('notifications', {}, body => body.data);
  }

  markAllNotificationsAsRead() {
    return this.makeRequest('notifications/markAllAsRead', {}, body => body.data);
  }

  markNotificationAsRead(ID) {
    return this.makeRequest(`notifications/${ID}/markAsRead`, { ID }, body => body.data);
  }

  getUser() {
    return this.makeRequest('user', {}, body => body.data);
  }

  getSettings() {
    return this.makeRequest('settings', {}, body => body.data);
  }

  makeRequest(endpoint, params = {}, manipulator) {
    if (arguments.length === 2 && typeof(params) === 'function') {
      manipulator = params;
      params = {};
    }

    return new Promise((resolve, reject) => {
      request({
        url: `https://shoppy.gg/api/v1/${endpoint}`,
        json: true,
        gzip: true,
        headers: {
          'Authorization': `${this.genApi(this.apiKey)}`,
          'User-Agent': `username - localhost`
        }
      }, (err, res, body) => {
        if (err || res.statusCode !== 200) {
          reject(err || res.statusMessage);
          return;
        }

        if (typeof(manipulator) === 'function') {
          resolve(manipulator(body));
        } else {
          resolve(body);
        }
      });
    });
  }

  updateSettings(args) {
    return new Promise((resolve, reject) => {
      request({
        url: `https://shoppy.gg/api/v1/settings`,
        json: args,
        gzip: true,
        method: 'POST',
        headers: {
          'Authorization': `${this.genApi(this.apiKey)}`,
          'User-Agent': `username - localhost`
        }
      }, (err, res, body) => {
        if (err || res.statusCode !== 200) {
          reject(err || res.statusMessage);
          return;
        }

        if (typeof(manipulator) === 'function') {
          resolve(manipulator(body));
        } else {
          resolve(body);
        }
      });
    });
  }

  updateProduct(product, args) {
    return new Promise((resolve, reject) => {
      request({
        url: `https://shoppy.gg/api/v1/products/${product}`,
        json: args,
        gzip: true,
        method: 'POST',
        headers: {
          'Authorization': `${this.genApi(this.apiKey)}`,
          'User-Agent': `username - localhost`
        }
      }, (err, res, body) => {
        if (err || res.statusCode !== 200) {
          reject(err || res.statusMessage);
          return;
        }

        if (typeof(manipulator) === 'function') {
          resolve(manipulator(body));
        } else {
          resolve(body);
        }
      });
    });
  }
}

module.exports = Shoppy;
