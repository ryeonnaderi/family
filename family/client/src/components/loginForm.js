import React from "react";


const LoginForm(props)  =>(
    <div>
        <h1>login</h1>
        <form>

            <div>
                <input type = "string" placeholder=" name" name ="name" onChange = {props.inputChange} value={props.name}/>
            </div>

            <div>
                <input type = "email" placeholder=" email" name ="email" onChange = {props.inputChange} value={props.eamil}/>
            </div>
            <div>
                <input type = "password" name = "password" placeholder = "password" on />
            </dv>
            <p>
                <button type = "submit" onClick = {props.submitForm}> login</button>
            </p>

        </form>

    </div>

)

export default LoginForm;
