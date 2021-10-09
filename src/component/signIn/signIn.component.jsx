import React from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './signIn.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:""
        }
        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handelSubmit(e){
        e.preventDefault()
        this.setState({email:"",password:""})
    }
    handelChange(e){
        const{value,name}=e.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in" >
                <h2>Login</h2>
                <span>Sign in with your email and password </span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput 
                    name="email" value={this.state.email} 
                    handelChange={this.handelChange} label="Email" type="email" autoComplete="off" required />
                    
                    <FormInput 
                    name="password" value={this.state.password} handelChange={this.handelChange} label="password" type="password" required />
                    
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}
export default SignIn;