let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
let db = mongojs('mongodb://sagar:sagar123@ds117311.mlab.com:17311/sagar-databsae', ['sagar-databsae']);

// GET api/orders
router.get('/orders', (req, res) => {
  let filters;
  let filterOrders = [];
  db.orders.find((err, orders) => {
    if (err) {
      res.send(err);
    }
    if (req.query.orderType) {
      filters = req.query.orderType.split(',');
      filters.forEach((filter, index) => {
        orders.forEach((order, index) => {
          if (order.orderType === filter) {
            filterOrders.push(order);
          }
        });
      });
      return res.json(filterOrders);
    } else {
      res.json(orders);
    }
  });
});

module.exports = router;
