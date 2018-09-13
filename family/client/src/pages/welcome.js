import React,{Component} from "react";
import {Redirect} from "react-router-dom";


class welcome extends Component{
    state ={
        toLogin: false,
        toSignup: false
    }
    gotoLogin = event =>{
        this.setState({
            toLogin:true
        })
    }
    gotoSignup = event =>(
        this.setState({
            toSignup:true
        })
    )
    render(){
        if(this.state.toLogin === true){
            return <Redirect to="/login"/>
        }

        if(this.state.toSignup === true){
            return <Redirect to="/signup"/>
        }
        return(
            <welcomeComp
           gotoLogin={this.gotoLogin}
           gotoSignup={this.gotoSignup}
           />
        )

    }
}
export default Welcome;
