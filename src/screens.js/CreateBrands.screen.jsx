import { Formik } from 'formik'
import React, { useState } from 'react'
import { useStore } from 'react-redux'
import Card from '../components/Card.component'
import CreateBrandCard from '../components/CreateBrandCard.component'
import Layouts from '../layout/Layouts'
import * as Yup from 'yup';
import api from '../API/api'

const CreateBrands = () => {
    const [loader, setLoader] = useState(false);
    const [errorName, setErrorName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");


    const initialValues = {
        name: ''
    }
    const validateSchema = Yup.object().shape({
        name: Yup.string().required()
    })
    const submitHandler = (values) => {
        setLoader(true)
        api.post('/brands', values)
            .then(resp => {

                setLoader(false)
                console.log("----------------------->", resp)
            })
            .catch(error => {
                console.log('-----------------------------', error.response.data.errors.name);
                setLoader(false)
                setErrorMsg(error.response.data.message)
                setErrorName(error.response.data.errors.name)
            })
    }
    return (
        <Layouts title="Create New Brand" path="/brands" >
            <div className="container-fluid">
                <div className="col-lg-9 col-xlg-12 col-md-12">
                    <div className="card p-4">
                        <div className="card-body px-4">
                            <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validateSchema} enableReinitialize={true}>
                                <CreateBrandCard errorMsg={errorMsg} errorName={errorName} loading={loader} />
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </Layouts>

    )
}

export default CreateBrands
