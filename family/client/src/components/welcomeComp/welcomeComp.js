import React from "react";

const WelcomeComp = (props) =>(
    <div>
    <h1>welcome</h1>
    <p>
        <button onClick = {props.goToLogin}>login</button>
        <button onClick = {props.goToSign}>signIn</button>
    </p>
    </div>
);


export default WelcomeComp;