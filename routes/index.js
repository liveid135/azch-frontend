var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const serviceUrl = process.env.CAPTUREORDERSERVICEURL || "http://" + process.env.CAPTUREORDERSERVICEIP;
  res.render('index', { title: 'Orders', captureOrderService: serviceUrl + "/v1/order" });
});

module.exports = router;
