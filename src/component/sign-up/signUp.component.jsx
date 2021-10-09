import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from '../../component//firebase/firebase.utils'
import './signUp.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = ({
            displayName: "",
            password: "",
            email: "",
            confirmPassword: ""
        })
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, password, confirmPassword, email } = this.state;
        if (password!==confirmPassword) {
            alert("password don't match!")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: "",
                password: "",
                email: "",
                confirmPassword: ""
            })

        } catch (error) {
            console.error(error)
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I dont have an account</h2>
                <span>Sign up with your email and password</span>
            <form className="sign-up-form" onClick={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                />

                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                />

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;