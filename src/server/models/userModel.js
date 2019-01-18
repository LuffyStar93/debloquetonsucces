module.exports = function(connection) {
  "use strict";
  const auth = require("./../utils/auth");
  const table = "user";
  // CRUD
  const create = function createUser(clbk, payload) {
    const sql = `INSERT INTO ${table} (email, pseudo, password, age, gamertag, psn, steamid) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const { email, pseudo, password, age, gamertag, psn, steamid } = payload;
    console.log(payload)
    const query = connection.query(
      sql,
      [email, pseudo, password, age, gamertag, psn, steamid],
      (err, res) => {
        if (err) return clbk(err, null);
        return clbk(null, res);
      }
    );
    console.log("last db query =>", query.sql);
  };

  const get = function getUser(clbk, id) {
    const sql = `SELECT * FROM ${table} WHERE id = ?`;
    const q = connection.query(sql, id, (err, user) => {
      if (err) return clbk(err, null);
      return clbk(null, user);
    });
    console.log(q.sql);
  };

  const getByMail = function getUserByMail(clbk, email) {
    const sql = `SELECT * FROM ${table} WHERE email = ?`;
    const q = connection.query(sql, [email], (err, user) => {
      if (err) return clbk(err, null);
      return clbk(null, ...user);
    });
    console.log(q.sql);
  };

  const getAll = function getUsers(clbk) {
    const sql = `SELECT * FROM ${table}`;
    
    const q = connection.query(sql, (err, users) => {
      if (err) return clbk(err, null);
      return clbk(null, users);
    });
    console.log(q.sql);
  };
  
  const remove = function removeUser(clbk, id) {
      const sql = `DELETE FROM ${table} WHERE id = ?`;
      const query = connection.query(
          sql,
          [id],
          (err, res) => {
              if (err) return clbk(err, null);
              return clbk(null, res);
          }
      );
      console.log("last db query =>", query.sql);
  };

  return { create, get, getAll, getByMail, remove };
};
