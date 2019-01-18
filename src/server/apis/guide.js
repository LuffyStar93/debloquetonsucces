/* jshint esversion : 6 */

// @root/api/guide.js

const guideAPi = function guideAPi(connection) {

    const router = require("express").Router();
    const guideModel = require("./../model/guide")(connection);
  
    router.post('/guide', (req, res) => {
        guideModel.create((err, dataset) => {
        res.send(dataset);
      }, req.body); // post datas ici ...
    });
  
    router.get('/guide/:id', (req, res) => {
        guideModel.get((err, dataset) => {
        res.send(dataset[1]);
      }, req.params.id);
    });
  
    router.get('/guide', (req, res) => {
        guideModel.getAll( (err, dataset) => {
        res.send(dataset);
      }, null);
    });
  
    router.delete('/guide', (req, res) => {
        guideModel.remove((err, dataset) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(dataset);
      }, req.body.ids); // tableau d'ids ici ...
    });
  
    router.patch('/guide', (req, res) => {
        guideModel.update((err, dataset) => {
        if (err) return res.status(500).send(err);
        else return res.status(200).send(dataset);
      }, req.body); // un tableau d'ids ici ...
    });
  
    return router;
  };
  
  module.exports = guideAPi;