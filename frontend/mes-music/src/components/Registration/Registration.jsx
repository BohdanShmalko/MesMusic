import React from "react";
import stl from "./Registration.module.css"
import {FieldCreator} from "../Common/FieldCreator";
import {NavLink, Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";

const Registration = ({}) => {

    const RegistrationForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                {FieldCreator('Your name : ', 'name', 'input', null, null, 'Name', stl.field)}
                {FieldCreator('Your last name : ', 'lastName', 'input', null, null, 'Last name', stl.field)}
                {FieldCreator('Enter your email or phone number', 'emailNumber', 'input', null, null, 'Email or phone number', stl.field)}
                {FieldCreator('Come up with a password : ', 'password', 'input', null, 'password', 'password', stl.field)}
                {FieldCreator('Repeat your password : ', 'repeatPassword', 'input', null, 'password', 'repeat password', stl.field)}
                <div className = {stl.submitButton}>
                    {/*!!!CHANGE IN FUTURE*/}<NavLink to="/profile" >
                        <button>Registration</button>
                    {/*!!!CHANGE IN FUTURE*/}</NavLink></div>
                <div className={stl.forgetPassword}><NavLink to="/home" >Log In</NavLink></div>
            </form>
        )
    }

    const RegistrationReduxForm = reduxForm({
        form : 'registration'
    })(RegistrationForm)

    const onSubmit = formData => {
        console.log(formData)
    }

    return <div className={stl.registrationPage}>
        <RegistrationReduxForm onSubmit = {onSubmit}/>
    </div>
}

export  default Registration