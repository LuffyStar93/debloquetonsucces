module.exports = (function messageAPI() {
    "use strict";
    const express = require("express");
    const router = express.Router();
  
    const auth = require("./../utils/auth");
  
    return function messageRouter(db) {
      
      const messageModel = require("./../models/message")(db.connection);
  
      router.get('/message', (req, res) => {
          messageModel.getAll( (err, dataset) => {
          res.send(dataset);
        }, null);
      });
  
      router.get('/message/:id', (req, res) => {
          messageModel.get((err, dataset) => {
          res.send(dataset[0]);
        }, req.params.id);
      });
  
      router.post('/message', (req, res) => {
          messageModel.create((err, dataset) => {
          res.send(dataset);
        }, req.body); // post datas ici ...
      });
  
      router.patch('/message', (req, res) => {
          messageModel.update((err, dataset) => {
          if (err) return res.status(500).send(err);
          else return res.status(200).send(dataset);
        }, req.body); // un tableau d'ids ici ...
      });
  
      router.delete('/message', (req, res) => {
          messageModel.remove((err, dataset) => {
          if (err) return res.status(500).send(err);
          return res.status(200).send(dataset);
        }, req.body.ids); // tableau d'ids ici ...
      });
  
      return router;
    };
  })();