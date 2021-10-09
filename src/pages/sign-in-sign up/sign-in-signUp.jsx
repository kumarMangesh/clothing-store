import React from "react";
import SignIn from "../../component/signIn/signIn.component";
import SignUp from "../../component/sign-up/signUp.component";
import './sign-in-signUp.style.scss'

const SignInSignUpPage=()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SignInSignUpPage;