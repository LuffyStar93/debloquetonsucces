const messageModel = function messageModel(connection) {

    const create = function createGuide(clbk, data) {
      const q = "INSERT INTO message (message, id_user, id_guide) VALUES (?, ?, ?)";
      const payload = [data.message, data.id_user, data.id_guide];
      connection.query(q, payload, (err, res) => {
         //console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    };
  
    const remove = function deleteGuide(clbk, ids) {
      // la clause SQL IN permet de chercher une valeur dans un tableau
      const q = "DELETE FROM message WHERE id IN (?)";
  
      connection.query(q, [ids], function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(res, null);
        return clbk(null, res);
      });
    };
  
    const update = function editGuide(clbk, user) {
      const q = "UPDATE message SET message = ?, id_user = ?, id_guide = ? WHERE id = ?";
      const payload = [message.message, message.id_user, message.id_guide, message.id];
      connection.query(q, payload, function (err, res, fields) {
        // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
        if (err) return clbk(err, null);
        return clbk(null, res);
      });
    };
  
    const getAll = function getGuides(clbk) {
      const sql = `SELECT * FROM message INNER JOIN user ON message.id_user = user.id`;
      
      const q = connection.query(sql, (err, messages) => {
        if (err) return clbk(err, null);
        return clbk(null, messages);
      });
      console.log(q.sql);
    };
  
    const get = function getGuide(clbk, id) {
      const sql = `SELECT * FROM message WHERE id = ?`;
      const q = connection.query(sql, id, (err, message) => {
        if (err) return clbk(err, null);
        return clbk(null, message);
      });
      console.log(q.sql);
    };
  
    return {
      create,
      remove,
      update,
      get,
      getAll
    };
  };
  
  module.exports = messageModel;