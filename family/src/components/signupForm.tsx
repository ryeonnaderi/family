import React from "react";

export default(props) =>(

    <h1> signup </h1>
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
        
        <input type =" text" name ="confirmPassword" placeholder = "confirmPassword" onChange = {props.inputChange} value ={props.confirmPassword} />
        
    </div>
    <div>

    <input type =" text" name ="name" placeholder = "name" onChange = {props.inputChange} value ={props.name} />

    </div>
    <div>
        <button onClick = {props.submitForm}>signup</button>
    </div>

    </form>

)
