import {Field} from 'redux-form'
import React from 'react'

export const FieldCreator = (
    coment, name, component,
    validatesArr = null, type = null,
    placeholder = null, style = null,) => (
    <div>
        {coment} <Field name = {name} component ={component}
                        validate = {validatesArr} type = {type}
                        className={style} placeholder = {placeholder}/>
    </div>
)