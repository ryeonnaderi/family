import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import signupForm from "./components/signupForm";

class signup extends Component{  
    state ={
        toSignup:false,
        name: "",
        email: "",
        password: ""
    },
    inputChange = event=> {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    },
    submitForm = event =>{

    }
}


export default signup;