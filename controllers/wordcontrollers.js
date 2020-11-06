const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.words
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => {
          console.error(err)
          res.status(422).json(err)
        });
    }, 
    findById: function(req, res) {
        db.words
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => {
            console.error(err)
            res.status(422).json(err)
          });
      },
      create: function(req, res) {
        db.words
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => {
            console.error(err)
            res.status(422).json(err)
          });
      },
      update: function(req, res) {
        db.words
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => {
            console.error(err)
            res.status(422).json(err)
          });
      },
      remove: function(req, res) {
        db.words
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => {
            console.error(err)
            res.status(422).json(err)
          });
      }
    };