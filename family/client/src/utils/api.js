import axios from "axios";

export default {

    // Gets the user with the given email
    getUser: function(email){
        return axios.get("/api/user/" + email);
    },

    // Stores a new User to the database
    createUser: function(newUser){
        return axios.post("/api/user", newUser);
    }
};
