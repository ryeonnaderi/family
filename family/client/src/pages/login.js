import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import authentication from "./component/authentication";
import API from "./utils/API";
import logInForm from "..components/logInForm"

class Login extends Component{
    state = {
        email: "",
        password: ""
    }
    inputChange = event =>{
        const {name,value} = event.target;
        
        this.setState({
            [name]: value})
    }

    submitForm = event =>{
        API.getUser(this.state.email).then(res =>console.log(res.data));
    }

    render(){
       return(
           <logInForm
           inputChange = {this.inputChange}
           submitForm = {this.submitForm}
           email = {this.email}
           password = {this.password}
           />
       )
    }

}





export default login;