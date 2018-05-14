var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

var sequelize = new Sequelize('python','root','root',{
    host:'localhost',
    dialect:'mysql',
    operatorsAliases: operatorsAliases,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})
sequelize.authenticate().then(function(){
    console.log('======================success connect===================')
}).catch(function(err){
    console.log('数据库链接失败'+err+'数据库链接失败')
})
module.exports = {
    sequelize:sequelize,
    Sequelize:Sequelize
};
