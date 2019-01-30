/* jshint esversion : 6 */

// @root/api/guide.js
// module.exports = (function userAPI() {
  
// "use strict";
// const express = require("express");
// const router = express.Router();
// const auth = require("./../utils/auth");



//     router.post('/guide', (req, res) => {
//         guideModel.create((err, dataset) => {
//         res.send(dataset);
//       }, req.body); // post datas ici ...
//     });
  
//     router.get('/guide/:id', (req, res) => {
//         guideModel.get((err, dataset) => {
//         res.send(dataset[1]);
//       }, req.params.id);
//     });
  
//     router.get('/guide', (req, res) => {
//         guideModel.getAll( (err, dataset) => {
//         res.send(dataset);
//       }, null);
//     });
  
//     router.delete('/guide', (req, res) => {
//         guideModel.remove((err, dataset) => {
//         if (err) return res.status(500).send(err);
//         return res.status(200).send(dataset);
//       }, req.body.ids); // tableau d'ids ici ...
//     });
  
//     router.patch('/guide', (req, res) => {
//         guideModel.update((err, dataset) => {
//         if (err) return res.status(500).send(err);
//         else return res.status(200).send(dataset);
//       }, req.body); // un tableau d'ids ici ...
//     });
  
//     return router;
  

// })();

module.exports = (function guideAPI() {
  "use strict";
  const express = require("express");
  const router = express.Router();

  const auth = require("./../utils/auth");

  return function guideRouter(db) {
    
    const guideModel = require("./../models/guide")(db.connection);

    router.get('/guide', (req, res) => {
        guideModel.getAll( (err, dataset) => {
        res.send(dataset);
      }, null);
    });

    router.get('/guide/:id', (req, res) => {
        guideModel.get((err, dataset) => {
        res.send(dataset[0]);
      }, req.params.id);
    });

    router.post('/guide', (req, res) => {
        guideModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });

    router.patch('/guide', (req, res) => {
        guideModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });

    router.delete('/guide', (req, res) => {
        guideModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.ids); // tableau d'ids ici ...
    });

    return router;
  };
})();