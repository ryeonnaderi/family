import React from "react";


const LoginForm = (props) => (
    <div>
        <h1>login</h1>
        <form>

            <div>
                <input type = "email" placeholder=" email" name ="email" onChange = {props.inputChange} value={props.email}/>
            </div>

            <div>
                <input type = "password" name = "password" placeholder = "password" onChange={props.inputChange} value={props.password}/>
            </dv>
            
            <p>
                <button type = "submit" onClick = {props.submitForm}> login</button>
            </p>

        </form>

    </div>

)

export default LoginForm;
