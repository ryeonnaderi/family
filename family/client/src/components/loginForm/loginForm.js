import React from "react";

const loginForm = (props) =>(
    <div>
        <h1> login </h1>
        <form>

            <div>
                <input type =" text" name ="name" placeholder = "name" onChange = {props.inputChange} value ={props.name} />
            </div>

            <div>
                <input type =" text" name ="email" placeholder = "email" onChange = {props.inputChange} value ={props.email} />
            </div>

            <div>
                <input type =" text" name ="password" placeholder = "password" onChange = {props.inputChange} value ={props.password} />
            </div>

            <div>
                <button onClick = {props.loginForm}>login</button>
                <button onClick = {props.forgotPassword}>forgot Password</button>
            </div>

        </form>
        
    </div>
);



export default loginForm;

