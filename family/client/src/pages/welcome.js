import react {Component} from "react";


const welcome = (props) =>(
    <button className = "button-default" onClick= {props.goToLogin}>login</button> 
    <button className = "button-default" onClick = {props.goToSignup}>SignUP</button>
)
