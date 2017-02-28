/**
 * Created by lithium on 2017-02-26.
 */
/**
 * Created by lithium on 2017-02-26.
 */
var express = require('express');
var router = express.Router();
var User=require("../models/users");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
router.post('/login', function(req, res, next) {
    User.yanzheng(req.body,function (data) {
        // console.log(1);
        // res.redirect('./public/index.html');
        res.send(data);

    })
    // User.getUserlist(function (data) {
    //     for (var i = 0; i < data.length; i++) {
    //         if(data[i].username==req.body.username&&data[i].password==req.body.password){
    //             flag=true;
    //         }
    //     }
    //
    //     console.log(flag);
    //     if(flag){
    //         res.send({
    //             status:"登录成功"
    //         })
    //     }else {
    //         res.send({
    //             status:"用户名或密码错误"
    //         })
    //     }
    //
    // })

});

module.exports = router;
