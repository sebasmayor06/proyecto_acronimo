const {DataTypes} =require("sequelize");


module.exports = (database) =>{
    database.define('busquedas', {

        id:{
            type: DataTypes.INTEGER, 
        primaryKey: true,          
        autoIncrement: true,       
        allowNull: false
        },

         name_acronimo: {
            type:DataTypes.STRING,
            
         }   
    },{timestamps:false})
}