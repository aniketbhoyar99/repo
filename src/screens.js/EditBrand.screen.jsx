import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CreateBrandCard from '../components/CreateBrandCard.component';
import Layouts from '../layout/Layouts';
import * as Yup from 'yup'
import api from '../API/api';

const EditBrand = (props) => {

    let param = useParams();
    console.log(param.id);
    const [errorName, setErrorName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");



    const [loader, setLoader] = useState(false)
    const [initialValues, setInitialValues] = useState({
        name: '',
        _method: 'PUT'
    })

    const validateSchema = Yup.object().shape({
        name: Yup.string().required()
    })
    const submitHandler = (values) => {
        setLoader(true)
        api.post(`/brands/${param.id}`, values)
            .then(resp => {
                setLoader(false)
                console.log(resp);
            })
            .catch(error => {
                setLoader(false)
                console.log('-----------------------------', error.response.data.errors.name);
                setErrorMsg(error.response.data.message)
                setErrorName(error.response.data.errors.name)
            })
    }

    const onLoad = () => {
        api.get(`/brands/${param.id}/edit`).then(resp => {
            console.log("---->", resp.data.data.name)
            setInitialValues({
                name: resp.data.data.name,
                _method: 'PUT'
            })
        })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        onLoad()
    }, [])

    return (
        <Layouts title="Edit Brand" path="/brands">
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
        </Layouts>
    )
}

export default EditBrand
