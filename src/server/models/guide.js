const guideModel = function guideModel(connection) {

  const create = function createGuide(clbk, data) {
    const q = "INSERT INTO guide (id_user, id_jeux, id_succesApi, contenus) VALUES (?, ?, ?, ?)";
    const payload = [data.id_user, data.id_jeux, data.id_succesApi, data.contenus];
    connection.query(q, payload, (err, res) => {
       //console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
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

  const getAll = function getGuides(clbk) {
    const sql = `SELECT * FROM guide`;
    
    const q = connection.query(sql, (err, guides) => {
      if (err) return clbk(err, null);
      return clbk(null, guides);
    });
    console.log(q.sql);
  };

  const get = function getGuide(clbk, id) {
    const sql = `SELECT * FROM guide WHERE id = ?`;
    const q = connection.query(sql, id, (err, guide) => {
      if (err) return clbk(err, null);
      return clbk(null, guide);
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

module.exports = guideModel;