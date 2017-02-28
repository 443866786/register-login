/**
 * Created by lithium on 2017-02-26.
 */
var database=require("./database");
function User(user) {
    this.username=user.username;
    this.password=user.password[0];
}
User.addUserList=function (data) {
    database(function (db) {
        var col=db.collection('users');
        col.insert(data);
        console.log(data);
        db.close()

    })
};
User.getUserlist=function (callback) {
    database(function (db) {
        var col=db.collection('users');
        col.find().toArray(function (err,docs) {
            callback(docs);
            // return data;
        })

        db.close();
    })
}
User.yanzheng=function (data,callback) {
    database(function (db) {
        var col=db.collection('users');
        col.find().toArray(function (err,docs) {
            var flag=false;
            for (var i = 0; i < docs.length; i++) {
                if (docs[i].username == data.username && docs[i].password == data.password) {
                    flag = true;
                }
            }
            // console.log(flag);
            if (flag) {
                callback({
                    status: "登录成功",
                    username:data.username
                })
            } else {
                callback({
                    status: "用户名或密码错误"
                })
            }
        })
        db.close();
    })
}
module.exports=User;