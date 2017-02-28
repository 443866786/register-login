/**
 * Created by lithium on 2017-02-27.
 */
/**
 * Created by lithium on 2017-02-26.
 */
var database=require("./database");
function Products(products) {
    this.id=products.id;
    this.src=products.src
}
Products.getProducts=function (callback) {
    database(function (db) {
        var col=db.collection('products');
        col.find().toArray(function (err,docs) {
            callback(docs)
        })

        db.close()
    })
};

module.exports=Products;