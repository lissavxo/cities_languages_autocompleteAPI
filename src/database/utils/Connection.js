const databaseConfig = require("../config/config")
const mysql = require('mysql')
class ConnectionHandler {

  constructor(){
    this.databaseConfig  = databaseConfig
  }
  /**
   * 
   * @param {String} databaseName 
   */
  getConnection(databaseName){

    const connection = mysql.createConnection({
      database : databaseName,
      ...databaseConfig
    });

    
    connection.connect(function(err){
      if(err) return false;
      console.log('database is connected');
    })

    return connection

  }
}

module.exports = ConnectionHandler