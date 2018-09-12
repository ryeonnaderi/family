import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import authentication from "./component/authentication";

class Login extends Component{
    state = {
        name: "",
        email: "",
        password: ""
    }
    inputChange = event =>{
        const {name,value} = event.target;
        
        this.setState({
            [name]: value})
    }

    submitForm = event =>{
        API.getUser(this.state.name).then(res =>console.log(res.data));
    }

    render(){
       return(
           <logInForm
           inputChange = {this.inputChange}
           submitForm = {this.submitForm}
           name = {this.name}
           email = {this.email}
           password = {this.password}
           />
       )
    }

}





export default login;