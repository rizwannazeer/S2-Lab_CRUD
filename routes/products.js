var express = require('express');
var router = express.Router();
var product=require("../model/myModel")

/* GET home page. */
router.get('/',  async function(req, res, next) {
let products=await product.find()
console.log(req.session);
  res.render('products/list',{products});
});

router.get('/add', async function(req, res, next) {
  
    res.render('products/add');
  });

  router.post('/add',  async function(req, res, next) {
    let pro=new product(req.body);
    await pro.save(); 
    res.redirect("/products");
  });


  router.get('/delete/:id',  async function(req, res, next) {
    let pro=await product.findByIdAndDelete(req.params.id);
    res.redirect("/products")
  });



 





  router.get('/edit/:id',  async function(req, res, next) {
    let pro=await product.findById(req.params.id)

    res.render("products/edit",{pro})
  });


  router.post('/edit/:id',  async function(req, res, next) {
    let pro=await product.findById(req.params.id);
    pro.name=req.body.name;
    pro.id=req.body.id;
    pro.duration=req.body.duration;
    pro.fee=req.body.fee;
    await pro.save();
    res.redirect("/products");
  });

 
 






module.exports = router;
