import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import api from '../API/api';
import myp from '../components/myp';
import Layouts from '../layout/Layouts';
import Dashboard from './Dashboard.screen';
import Try from './Try.screen';

const Brands = () => {

    // const [currentPage, setCurrentPage] = useState(1);
    // const [url, setUrl] = useState();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [getBrands, setGetBrands] = useState([])
    const [trueData, setTrueData] = useState(false)
    const [opData, setOpData] = useState('1')
    let history = useHistory();
    let param = useParams();
    console.log("param", param.url);


    let headers = {
        Accept: 'application/json',
        Authorization: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null,

    }


    const delProduct = (id) => {
        api.delete(`/brands/${id}`).then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        })
    }

    const loadBrands = (brr = 1) => {
        console.log("88888888888", brr);
        api.get(`/brands?page=${brr}`)
            .then(resp => {
                setGetBrands(resp.data.data.data);
                setData(resp.data.data.links)
                setLoading(false)
            })
            .catch(err => {
                console.log("```````````````````", err)
            })
    }

    const paginationLoader = (e, paginate) => {
        e.stopPropagation();
        let arr = paginate.url
        let brr = arr.slice(44, 45)
        console.log(brr);
        loadBrands(brr);
    }

    useEffect(() => {
        loadBrands()
    }, [])


    return (
        <Layouts title="Brands" path="/brands">
            <div className="contained-fluid m-4">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="white-box analytics-info" style={{ border: '0px solid black', borderRadius: '40px' }}>
                            <div>
                                <Link to="/brands/create-brand" className="float-right fas fa-plus-circle btn btn-primary p-3 mb-5">Create</Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="">
                                        <tr className="bg-primary ali">
                                            <th>sr.</th>
                                            <th>Name</th>
                                            <th>Images</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loading ? 'loading....' : ''
                                        }
                                        {
                                            getBrands.map((value, index) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td><img src={value.thumb} /></td>
                                                        <td>
                                                            <Link to={`/brands/${value.id}/edit`} className="fas fa-edit ml-3 btn"></Link>
                                                            <Link className="fas fa-eye ml-3"></Link>
                                                            <Link onClick={() => { delProduct(value.id) }} className="fas fa-trash-alt ml-3 btn"></Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div className="d-flex d-inline-block">
                                    {
                                        data.map((paginate) => {
                                            return (
                                                <div>
                                                    <Link className={`btn btn-${paginate.active ? 'primary' : 'secondary'} m-1`} onClick={(e) => paginationLoader(e, paginate)}>
                                                        {paginate.label.includes('&l') ? paginate.label.split('&laquo;') : paginate.label}
                                                    </Link>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Brands
