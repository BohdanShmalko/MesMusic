import React from "react";
import stl from "./Registration.module.css"
import {FieldCreator} from "../Common/FieldCreator";
import {NavLink} from "react-router-dom";
import {reduxForm} from "redux-form";
import {empty, maxLength, minLength, repeatPassword} from "../../validate/validate";
import {CheckInput} from "../Common/Checker/Checker";

const RegistrationForm = props => {
    const maxLength20 = maxLength(20)
    const minLength3 = minLength(3)
    return (
        <form onSubmit={props.handleSubmit}>
            {FieldCreator('Your name : ', 'name', CheckInput, [maxLength20, minLength3, empty], null, 'Name', stl.field)}
            {FieldCreator('Your last name : ', 'lastName', CheckInput, [maxLength20, minLength3, empty], null, 'Last name', stl.field)}
            {FieldCreator('Enter your email or phone number', 'emailNumber', CheckInput, [empty], null, 'Email or phone number', stl.field)}
            {FieldCreator('Come up with a password : ', 'password', CheckInput, [empty], 'password', 'password', stl.field)}
            {FieldCreator('Repeat your password : ', 'repeatPassword', CheckInput, [repeatPassword(props.currentPassword), empty], 'password', 'repeat password', stl.field)}
            <div className = {stl.submitButton}>
                {/*!!!CHANGE IN FUTURE}<NavLink to="/profile" > {*/}
                <button>Registration</button>
                {/*!!!CHANGE IN FUTURE}</NavLink> {*/}</div>
            <div className={stl.forgetPassword}><NavLink to="/home" >Log In</NavLink></div>
        </form>
    )
}

const RegistrationReduxForm = reduxForm({
    form : 'registration'
})(RegistrationForm)

const Registration = ({currentPassword}) => {

    const onSubmit = formData => {
        console.log(formData)
    }
    return <div className={stl.registrationPage}>
        <RegistrationReduxForm onSubmit = {onSubmit} currentPassword = {currentPassword}/>
    </div>
}

export  default Registration