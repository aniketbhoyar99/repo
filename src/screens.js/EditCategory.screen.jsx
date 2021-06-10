import { Formik, validateYupSchema } from 'formik';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Card from '../components/Card.component';
import Layouts from '../layout/Layouts';
import * as Yup from 'yup'
import api from '../API/api';

const EditCategory = () => {




    const [loader, setLoader] = useState(false);
    const param = useParams().id;
    let history = useHistory();
    const [errorDesc, setErrorDesc] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorSlug, setErrorSlug] = useState("");
    const [errorMsg, setErrorMsg] = useState("");




    const [initialValues, setInitialValues] = useState({
        name: "",
        description: "",
        slug: "",
        _method: 'PUT'
    });


    const validateSchema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        slug: Yup.string().required()
    });


    const submitHandler = values => {
        setLoader(true)
        console.log("---->", values);
        api.post(`/categories/${param}`, values)
            .then(resp => {
                setLoader(false)
                // history.push('/categories')
                console.log(resp);
            })
            .catch(error => {
                setLoader(false)
                setErrorMsg(error.response.data.message)
                setErrorDesc(error.response.data.errors.description)
                setErrorSlug(error.response.data.errors.slug)
                setErrorName(error.response.data.errors.name)
            })
    }

    const editData = () => {
        api.get(`/categories/${param}/edit`)
            .then(response => {
                console.log(response.data.data);
                setInitialValues({
                    name: response.data.data.name,
                    description: response.data.data.description,
                    slug: response.data.data.slug,
                    _method: 'PUT'
                })

            })
            .catch(error => {
                console.log("getting failed", error);
            })
    }


    useEffect(() => {
        editData();
    }, [])


    return (
        <Layouts title="Edit Category" path="/categories">
            <div className="container-fluid">
                <div className="col-lg-9 col-xlg-12 col-md-12">
                    <div className="card p-4">
                        <div className="card-body px-4">
                            <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validateSchema} enableReinitialize={true}>
                            <Card errorMsg={errorMsg} errorDesc={errorDesc} errorSlug={errorSlug} errorName={errorName} loading={loader} />
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>

        </Layouts>

    )
}

export default EditCategory
