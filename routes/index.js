var express = require('express');
var router = express.Router();
var item=require("../model/myModel")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Rizwan' });
});


router.get('/cart', function(req, res, next) {

  let cart=req.cookies.cart
  if(!cart) cart=[];
  res.render('cart',{cart});
});


module.exports = router;
