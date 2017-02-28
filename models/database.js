/**
 * Created by lithium on 2017-02-26.
 */
var client=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/taobao";
module.exports=function (callback) {
    client.connect(url,function (err,db) {
        callback(db);
    })
}
