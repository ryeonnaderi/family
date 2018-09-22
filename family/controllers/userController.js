const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the houseController
module.exports = {
  create: function(req, res) {
    const{email,password} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    db.Users.init().then(() => {
      db.Users.create({email, password, encryptedPassword: encryptedPassword})
      .then(dbModel => res.json(dbModel)
      .catch(err => res.status(422).json(err) ))})
          
  },
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res){
    db.Users
      .findOne({email:req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
