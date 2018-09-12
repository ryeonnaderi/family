import React from "react";
import{Router, Redirect} from "react-router-dom";

const Authentication = {
    isAuthenticatied: false,
    Authenticate(cb){
        this.isAuthenticatied = true
        setTimeout(cb,100)
    }
}




export default Authentication;