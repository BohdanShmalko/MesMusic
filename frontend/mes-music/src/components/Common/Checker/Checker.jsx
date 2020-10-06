import React from "react";
import stl from "./Checker.module.css"

const CheckCreator = props => {
    let hasError = props.meta.error && props.meta.touched
    return (
        <span className={hasError && stl.errorField}>
            {props.children}
            {hasError && <div className={stl.errorText}>{props.meta.error}</div>}
        </span>
    )
}

export const CheckInput = props => <CheckCreator {...props}><input {...props.input} {...props}/></CheckCreator>

export const CheckTextarea = props => <CheckCreator {...props}><textarea {...props.input} {...props}/></CheckCreator>