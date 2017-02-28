/**
 * Created by lithium on 2017-02-27.
 */
var express = require('express');
var router = express.Router();
var Products=require("../models/products");
router.get("/productsList",function (req,res) {
    Products.getProducts(function (data) {
        res.send(data);
    })
});
router.post("/productsList",function (req,res) {
    console.log(req.body);
    res.send("success");
})
module.exports = router;
