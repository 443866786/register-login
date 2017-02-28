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

// 用户名实时验证
router.post('/test', function(req, res, next) {
    // console.log(req.body);
    User.getUserlist(function (data) {
        var flag=false;
        for (var i = 0; i < data.length; i++) {
            if(data[i].username==req.body.username){
                flag=true;
            };
        }
        if(flag){
            res.send({
                status:false,
                content:'用户名不可用'
            })
        }else {
            res.send(
                {
                    status:true,
                    content:'用户名可用'
                })
        }
    })

});
router.post('/zhuce', function(req, res, next) {
    var data=new User(req.body);
    console.log(data);
    User.addUserList(data);
    res.send({
        status:'注册成功',
        // html:'<a href="192.168.25.42:3000/register"></a>'
    });
});

module.exports = router;
