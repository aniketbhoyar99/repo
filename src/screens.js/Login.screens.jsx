import axios from 'axios';
import { Formik, Form, ErrorMessage, Field } from 'formik'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import api from '../API/api'
import './../../src/App.css'

const Login  = () => {

    const [error, setError] = useState();
    let history = useHistory();

    const initialValues = {
        email: "",
        password: ""
    };

    const submitHandler = values => { 

        api.post('/login', values).then(response => {
            console.log("response", response);
            sessionStorage.setItem('token', 'Bearer ' + response.data.data.token);
            console.log('--->', response.data.success);
            history.push('/dashboard');
            // redirect to dashboard
        }).catch(error => {
            setError(error.response.data.message.email)
        })
    }
    const validationHandler = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });


    return (
        <div>
            <div className="d-lg-flex half">
                <div className="bg order-1 order-md-2" style={{ backgroundImage: 'url("images/bg_1.jpg")' }} />
                <div className="contents order-2 order-md-1">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7">
                                <h3>Login</h3>
                                <Formik initialValues={initialValues} validationSchema={validationHandler} onSubmit={submitHandler}>
                                    <Form className="user">
                                        <div className="form-group first">
                                            <label htmlFor="username">Username</label>
                                            <Field type="email" name="email" className="form-control" placeholder="your-email@gmail.com" id="username" />
                                            <ErrorMessage name="email" component='span' className="text-danger" />
                                        </div>
                                        <div className="form-group last mb-3">
                                            <label htmlFor="password">Password</label>
                                            <Field type="password" name="password" className="form-control" placeholder="Your Password" id="password" />
                                            <ErrorMessage name="password" component='span' className="text-danger" />
                                        </div>
                                        <button type="submit" defaultValue="Log In" className="btn btn-block btn-primary">Submit</button>
                                        <br />
                                        <br />
                                        <div className="text-danger">
                                            {
                                                error
                                            }
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
