# Shoppy.gg
Wrapper for the Shoppy.gg API

```js
const Shoppy = require('Shoppy');

const API = new Shoppy.API(apiKey)
```

# Installation
```javascript
$ npm install shoppy.gg
```

# API
To make Shoppy.gg API calls you need to initate the Shoppy.API class by passing it your Shoppy.gg Api Key.

All calls return a promise with the data from the response. If there is an error making the request or the status of the request from Shoppy is not "success" the promise will be rejected.

### getSingleOrder(ID)
Retrives a single order. Pass it your orderId

### getOrders()
Retrives all orders.

### getSingleWebhook(ID)
Retrives a specific webhook. Pass it your webhookId.

### getWebhooks
Retrives all webhooks.

### getSingleFeedback(ID)
Retrives a single feedback. Pass it your feedbackId.

### getFeedback()
Retrives all feedback.

### getSingleQuery(ID)
Retrives a single query. Pass it your queryId.

### getQueries()
Retrieves all queries.
