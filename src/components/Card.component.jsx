import React, { useState } from 'react'
import axios from 'axios';
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import api from '../API/api';
const Card = (props) => {


    let Loader = props.loading;
    console.log(Loader);
    let Data = Loader ? 's' : ''
    console.log("Data", Data);

    return (

        <Form method="post" className="form-horizontal form-material">
            <div className="form-group mb-4">
                <label className="col-md-12 p-0">Category Name :</label>
                <div className="col-md-12 border-bottom p-0">
                    <Field type="text" name="name" placeholder="Johnathan Doe" className="form-control p-0 border-0" />
                </div>
                <div className="text-danger">
                    {
                        props.errorName
                    }
                </div>
                <ErrorMessage name="name" component='span' className="text-danger" />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="" className="col-md-12 p-0">Description :</label>
                <div className="col-md-12 border-bottom p-0">
                    <Field type="texxtarea" name="description" placeholder="description......." className="form-control p-0 border-0" />
                </div>
                <div className="text-danger">
                    {
                        props.errorDesc
                    }
                </div>
                <ErrorMessage name="description" component='span' className="text-danger" />
            </div>
            <div className="form-group mb-4">
                <label className="col-md-12 p-0">Slug Name :</label>
                <div className="col-md-12 border-bottom p-0">
                    <Field type="text" name="slug" defaultValue="password" className="form-control p-0 border-0" />
                </div>
                <div className="text-danger">
                    {
                        props.errorSlug
                    }
                </div>
                <ErrorMessage name="slug" component='span' className="text-danger" />
            </div>
            <div className="form-group mb-4">
                <label className="col-md-12 p-0">Image :</label>
                <div className="col-md-12 border-bottom p-0">
                    <Field type="file" name="img" className="form-control p-0 border-0" />
                </div>
            </div>
            <div className="text-danger">
                
                    {props.errorMsg}
                
            </div>
            <div className="form-group mb-4">
                <div className="col-sm-12" >
                    {
                        console.log("==>", Data)
                    }
                    <button className="btn-rounded" disabled={Data}>
                        <span className={Loader ? "spinner-border spinner-border-sm" : "btn"} role="status" aria-hidden="true"></span>
                        {Loader ? 'Loading...' : 'Submit'}
                    </button>

                </div>


            </div>

        </Form>
    )
}

export default Card
