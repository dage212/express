var sequelize = require('../index').sequelize;
var Sequelize = require('../index').Sequelize;

var Details = sequelize.define('details',{
    id:{
        type:Sequelize.INTEGER(20),
        primaryKey:true,
        autoIncrement:true,
        comment:'#id'
    },
    title:Sequelize.STRING(200),
    img:Sequelize.STRING(200),
    brief:Sequelize.STRING(200)
})
// Details.sync({force: true}).then(function(){
//     console.log('Create Details Successfully!')
// }).catch(function(err){
//     console.log(err)
// })
var create = function(req,act,fn){
    return sequelize.transaction(function(t){
        return Details[act](req.body,{transaction: t}).then(function (value) {
            console.log('======添加成功=====')
            fn&&fn()
        })
    })
}
module.exports = {
    Details:Details,
    create:create
};
