var express = require("express");
const productHelpers = require("../helpers/product-helpers");
var router = express.Router();
var productHelper = require('../helpers/product-helpers')
/* GET users listing. */
router.get("/", function (req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render("admin/view-products", { admin: true, products })
console.log(products)
  })

 

});

router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
console.log(req.body);
console.log(req.files.image); 

productHelpers.addProduct(req.body,(id)=>{
  let image = req.files.image
  image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
    if(!err){
      res.render('admin/add-product')
    }else{
      console.log(err);
    }
  })

}) 

})


module.exports = router;