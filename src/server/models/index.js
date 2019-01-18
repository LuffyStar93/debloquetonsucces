/*jshint esversion :  6 */

// @root/model/database.js

const database = function database(config) {
    const mysql  = require('mysql');
  
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : "debloquetonsucces",
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' 
    });
  
    const connect = function connect() {
      connection.connect(function(err, res) {
        if (err) return console.error(err);
        else console.log("db connected");
         // le serveur node est connecté au serveur mysql (BDD)
      });
    };
  
    const end = function end() {
      connection.end(); // on termine la connection à la BDD
    };
    connect();
  
    return {
      connection,
      end
      
    };
  };
  
  module.exports = database;