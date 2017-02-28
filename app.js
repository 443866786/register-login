var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');
var products=require('./routes/getproducts');
var session = require('express-session');
var app = express();
app.use(session({
    secret: 'secret',
    cookie:{
        maxAge: 1000*60*30
}
}));
app.use(function(req,res,next){
    res.locals.user = req.session.user;   // 从session 获取 user对象
    var err = req.session.error;   //获取错误信息
    delete req.session.error;
    res.locals.message = "";   // 展示的信息 message
    if(err){
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
    }
    next();  //中间件传递
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/products',products);
app.use('/login', login);
app.use('/register', register);

module.exports = app;
