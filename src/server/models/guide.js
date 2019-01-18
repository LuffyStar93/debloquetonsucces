const guideModel = function guideModel(connection) {

  const create = function createGuide(clbk, data) {
    const q = "INSERT INTO guide (user_id) VALUES (?)";
    const payload = [data.user_id];

    connection.query(q, payload, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const remove = function deleteGuide(clbk, ids) {
    // la clause SQL IN permet de chercher une valeur dans un tableau
    const q = "DELETE FROM guide WHERE id IN (?)";

    connection.query(q, [ids], function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(res, null);
      return clbk(null, res);
    });
  };

  const update = function editGuide(clbk, user) {
    const q = "UPDATE guide SET user_id = ? WHERE id = ?";
    const payload = [guide.user_id, guide.id];
    connection.query(q, payload, function (err, res, fields) {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const get = function getUser(clbk) {
    let sql = "SELECT * FROM guide";
     connection.query(sql, (error, results, fields) => {
      // return console.log(this.sql);
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  return {
    create,
    remove,
    update,
    get
  };
};

module.exports = guideModel;