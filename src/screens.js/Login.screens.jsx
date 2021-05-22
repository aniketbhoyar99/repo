import axios from 'axios';
import { Formik, Form, ErrorMessage, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import api from './../API/api'

const Login = () => {


    const initialValues = {
        email: "",
        password: ""
    };

    const submitHandler = values => {

        api.post('/login', values).then(response => {
            alert('Loing Success');
            sessionStorage.setItem('token', 'Bearer ' + response.data.data.token);
            // redirect to dashboard
        })


        // axios.post('http://best-it-training.com/api/login', values, headers)
        //     .then((response) => {
        //         // console.log(response.data.data.token)
        //     }
        //     )
        .catch(error => console.log("i am error", error))
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
                                    <Form action="#" method="post">
                                        <div className="form-group first">
                                            <label htmlFor="username">Username</label>
                                            <Field type="text" name="email" className="form-control" placeholder="your-email@gmail.com" id="username" />
                                        </div>
                                        <ErrorMessage name="email" />
                                        <div className="form-group last mb-3">
                                            <label htmlFor="password">Password</label>
                                            <Field type="password" name="password" className="form-control" placeholder="Your Password" id="password" />
                                        </div>
                                        <ErrorMessage name="password" className="text-danger" />
                                        <button type="submit" defaultValue="Log In" className="btn btn-block btn-primary">Submit</button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Login
