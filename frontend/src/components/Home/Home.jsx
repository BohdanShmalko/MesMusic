import React from 'react'
import stl from './Home.module.css'
import Logo from '../Common/Logo/Logo'
import {NavLink, Redirect} from 'react-router-dom'
import {empty} from '../../validate/validate'
import { Formik } from 'formik'
import {useDispatch, useSelector} from "react-redux";
import {getIsAuthorize} from "../../redux/selectors/globalSelectors";
import {authorise} from "../../redux/authorizeReducer";

const Home = ({}) => {
    const isAuthorize = useSelector(getIsAuthorize)
    const dispatch = useDispatch()
    return isAuthorize ? <Redirect to={'/profile'}/> : <div className={stl.homePage}>
        <div className={stl.welcome}>
            <Logo widthLogo = '50'/>
            <div className={stl.littleInf}>
                Let's help to learn to feel music and find people with common interests.
            </div>
        </div>
        <div  className={stl.loginForm}>
            <Formik
                initialValues={{ email: '', password: '', isRemember: false }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    values.isRemember ? values.isRemember = 1 : values.isRemember = 0
                    dispatch(authorise(values))
                    setSubmitting(true)
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}<br/>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}<br/>
                        Remember me <input
                            type="checkbox"
                            name="isRemember"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.isRemember}
                        />
                        {errors.isRemember && touched.isRemember && errors.isRemember}<br/>
                        <button className = {stl.submitButton} type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            <div className={stl.forgetPassword}><NavLink to='/forgetPassword' >Forget password</NavLink></div>
        </div>
    </div>
}

export default Home