import React from "react";
import stl from "./Home.module.css"
import Logo from "../Common/Logo/Logo";
import {FieldCreator} from "../Common/FieldCreator";
import {reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";

const Home = ({}) => {
    const LogInForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                {FieldCreator(null, 'email', 'input', null, null, 'Email or phone number')}
                {FieldCreator(null, 'password', 'input', null, 'password', 'Password')}
                <div className = {stl.submitButton}>
                    {/*!!!CHANGE IN FUTURE*/}<NavLink to="/profile" >
                        <button>Log In</button>
                    {/*!!!CHANGE IN FUTURE*/}</NavLink>
                    </div>
                <div className={stl.forgetPassword}><NavLink to="/forgetPassword" >Forget password</NavLink></div>
            </form>
        )
    }

    const LogInReduxForm = reduxForm({
        form : 'logIn'
    })(LogInForm)

    const onSubmit = formData => {
        console.log(formData)
    }

    return <div className={stl.homePage}>
        <div className={stl.welcome}>
            <Logo widthLogo = '40'/>
            <div className={stl.littleInf}>Let's help to learn to feel music and find people with common interests.</div>
        </div>
        <div  className={stl.loginForm}>
            <LogInReduxForm onSubmit = {onSubmit}/>
        </div>
    </div>
}

export default Home