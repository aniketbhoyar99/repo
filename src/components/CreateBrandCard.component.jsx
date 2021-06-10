import { ErrorMessage, Field, Form } from 'formik';
import React from 'react'

const CreateBrandCard = (props) => {


    let Loader = props.loading;
    console.log(Loader);
    let Data = Loader ? 's' : ''
    console.log("Data", Data);


    return (

        <Form className="form-horizontal form-material">
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
                <div className="col-sm-12" >
                    {
                        console.log("==>", Data)
                    }
                    <div className="text-danger">
                    {
                        props.errorMsg
                    }
                    
                    </div>
                    <button className="btn-rounded" disabled={Data}>
                        <span className={Loader ? "spinner-border spinner-border-sm" : "btn"} role="status" aria-hidden="true"></span>
                        {Loader ? 'Loading...' : 'Submit'}
                    </button>

                </div>

            </div>

        </Form>

    )
}

export default CreateBrandCard
