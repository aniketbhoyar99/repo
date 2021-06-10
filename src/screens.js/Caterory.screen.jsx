import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import api from '../API/api';
import Layouts from '../layout/Layouts'



const Caterory = () => {
    const [getCategory, setGetCategory] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [loader, setLoader] = useState(true);
    let history = useHistory();
    const [url, setUrl] = useState('http://best-it-training.com/api')



    const delProduct = (id) => {
        console.log("my id---->", id);
        api.delete(`/categories/${id}`)
            .then(response => {
                console.log(response)
                history.push('/Categories')
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        apiData()
    }, [])


    let headers = {
        Accept: 'application/json',
        Authorization: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,

    }

    const apiData = () => {
        
        axios.get(url + '/categories', { headers }).then(response => {
            console.log("response----->", response.data.message.links);
            setPagination(response.data.message.links)
            setGetCategory(response.data.message.data)
            setLoader(false)
        }).catch(error => {
            console.log("i am big.........................error", error);
        })

    }


    return (
        <Layouts title="Categories" path="/dashboard">
            <div className="contained-fluid m-4">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="white-box analytics-info" style={{ border: '0px solid black', borderRadius: '40px' }}>
                            <div>
                                <Link to="/categories/addCategory" className="float-right fas fa-plus-circle btn btn-primary p-3 mb-5">Create</Link>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="">
                                        <tr className="bg-primary ali">
                                            <th>sr.</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Images</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loader ? 'loading....' : ''
                                        }

                                        {

                                            getCategory.map((value, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{value.name}</td>
                                                        <td>{(value.description).length > 30 ? (value.description).substring(0, 30) + '...' : (value.description)}</td>
                                                        <td><img src={value.thumb} /></td>
                                                        <td>
                                                            <Link to={`/categories/${value.id}/edit`} className="fas fa-edit ml-3 btn"></Link>
                                                            <Link className="fas fa-eye ml-3"></Link>
                                                            <Link onClick={() => { delProduct(value.id) }} className="fas fa-trash-alt ml-3 btn"></Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })

                                        }

                                    </tbody>

                                </table>

                                <div>
                                    {
                                        pagination.map((page) => {
                                            <h1>{page.label}</h1>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    );
}

export default Caterory
