var Sequelize = require('../index').Sequelize;
var sequelize = require('../index').sequelize;
var Services = sequelize.define('services',{
        title:{
            type:Sequelize.STRING(150),
            allowNull:true
        },
        brief:{
            type:Sequelize.STRING(200),
            allowNull:true
        },
        img:{
            type:Sequelize.STRING(200),
            allowNull:true
        },
        desc:{
            type:Sequelize.TEXT,
            allowNull:true
        }
})
// Services.sync({force: true}).then(function(){
//     console.log('============CREATE TABLE Services===========')
// },function(err){
//     console.log(err)
// });
module.exports = Services;