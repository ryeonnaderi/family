var mongoose = require("mongoose");
var schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
        type: String,
        required: "name is required",
        trim: true,
        unique:true
    },

    email:{
        type: String,
        required: "email is required",
        match:[/.+@.+\..+/, "please enter a valid e-mail address"],
        trim:true,
        unique:true
    },
    password:{
        type: String,
        trim:true,
        required: "password is required"
    },
    encryptedPassword:{
        type: String,
        trim: true,
        required: "password is required"
    }
})

var User = mongoose.model("user", UserSchema);

model.exports = User;S