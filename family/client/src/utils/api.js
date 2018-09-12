import axios from "axios";

export default {

    getUser: email => {
        return axios.get("/api/user" + email)
    },
    createUser: function(newUser){
        return axios.post("/api/user", newUser)
    },
    
}