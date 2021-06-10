import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './../../src/App.css';

const TopHeader = () => {


    let history = useHistory();
    const logout = () => {
        sessionStorage.removeItem('token');
        history.push('/');
    }
    return (
        <div>
            <header className="topbar" id="myId" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin6">
                        <a className="navbar-brand" href="dashboard.html">
                            {/* Logo icon */}
                            <b className="logo-icon text-danger">
                                {/* Dark Logo icon */}
                                <img src="plugins/images/logo-icon.png" alt="homepage" />
                               <span className="ml-3"> Sumit..</span>
                            </b>
                            {/*End Logo icon */}
                            {/* Logo text */}
                            <span className="logo-text">
                                sumit
                            </span>
                        </a>
                        <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            <li className=" in">
                                <form role="search" className="app-search d-none d-md-block me-3">
                                    <input type="text" placeholder="Search..." className="form-control mt-0" />
                                    <a href className="active">
                                        <i className="fa fa-search" />
                                    </a>
                                </form>
                            </li>
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600">Admin</span>
                                    <img className="img-profile rounded-circle" src="hjj" />
                                </a>
                                {/* Dropdown - User Information */}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                    <div className="dropdown-divider"/>
                                    <Link id="logout"
                                        className="dropdown-item" onClick={logout}>
                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                                    Logout
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default TopHeader;
