import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import signupForm from "../components/signupForm";
import API from "./utils/API";
import authenticate from "./compnonent/authenticate";

class signup extends Component{  
    state ={
        toSignup:false,
        name: "",
        email: "",
        password: ""
    }
    inputChange = event=> {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    submitForm = event =>{
        event.preventdefault();
        API.create({email: this.state.email, password: this.state.password}).then((res)=>{console.log(res.data)});
        if(this.state.email ===""){
            alert("please enter a valid email");
        }else if(this.state.password !== this.state.confirmPassword){
            alert("passwords dont match");
        }else{}
        return(
            <signupForm
            inputChange = {this.inputChange}
            submitForm={this.submitForm}
            signup = {this.signup}
            email={this.state.email}
            password = {this.state.password}
            confirmPassword = {this.state.confirmPassword}
            />    
        )
    }
}


export default signup;