const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    create: (res,req) =>{
        const {email,password} = req.body;


        const salt  = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        db.User.init().then(() =>{
            dbUser.create({email, password, encryptedPassword:encryptedPassword})
            .then(dbModel => res.json(dbModel)
            .catch(err =>res.status(422).json(err) ))})
    },

    findAll:(req,res) =>{
        db.Users
        .find(req,query)
        .sort({date:-1})
        .then(dbModel =>res.json(dbModel))
        .catch(err => res.status (422).json(err)) 
    },

    findByEmail:(req,res) =>{
        db.Users
        .findOne({email:req.params.email})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findById:  (req,res) =>{
        db.Users
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))

    },
    update:(req,res) =>{
        db.Book
        .findById({_id: req.params.id})
        .then(bdModel =>dbModel.remove())
        .then(bdModel =>res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
};