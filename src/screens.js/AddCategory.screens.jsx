import React, { useState } from 'react'
import Card from '../components/Card.component'
import Layouts from '../layout/Layouts'
import * as Yup from 'yup'
import api from '../API/api'
import { Formik } from 'formik'

const AddCategory = (props) => {


    const [loader, setLoader] = useState(false);
    const [errorDesc, setErrorDesc] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorSlug, setErrorSlug] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const initialValues = {
        name: "",
        description: "",
        slug: "",
        img: ''
    };

    const validateSchema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        slug: Yup.string().required()
    });


    const submitHandler = values => {
        console.log(values);
        setLoader(true)
        api.post('/categories', values)
            .then(resp => {
                setLoader(false)
                console.log(resp);
            })
            .catch(error => {
                console.log('-----------------------------', error.response.data.errors.slug);
                setLoader(false)
                setErrorMsg(error.response.data.message)
                setErrorDesc(error.response.data.errors.description)
                setErrorSlug(error.response.data.errors.slug)
                setErrorName(error.response.data.errors.name)
            })

    }



    return (

        <Layouts title="add New Category" path="/categories">
            <div className="container-fluid">
                <div className="col-lg-9 col-xlg-12 col-md-12">
                    <div className="card p-4"><h3>{props.subTitle}</h3>
                        <div className="card-body px-4">
                            <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validateSchema} >
                                <Card errorMsg={errorMsg} errorDesc={errorDesc} errorSlug={errorSlug} errorName={errorName} loading={loader} />
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>

        </Layouts>

    )
}

export default AddCategory
