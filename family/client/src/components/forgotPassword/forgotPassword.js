import React from "react";


const forgotPasswordForm = (props) =>{
    <div>
        <h1> forgot Password</h1>
        <form>
        <div>
                <input type="text" name="email" placeholder="email" onChange ={props.inputChange} value = {props.email}/>
            </div>
           
            <div>
                <button onClick = {props.forgotPasswordForm}>submit</button>
            </div>
        </form>

    </div>
}