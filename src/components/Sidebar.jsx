import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <aside className="left-sidebar" data-sidebarbg="skin6">
                {/* Sidebar scroll*/}
                <div className="scroll-sidebar">
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            {/* User Profile*/}
                            <li className="sidebar-item pt-2">
                                <Link to="/dashboard" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                    <i className="far fa-clock" aria-hidden="true" />
                                    <span className="hide-menu">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/profile" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                    <i className="fa fa-user" aria-hidden="true" />
                                    <span className="hide-menu">Profile</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/categories" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                    <i className="fa fa-table" aria-hidden="true" />
                                    <span className="hide-menu">Categories</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/brands" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                    <i className="fa fa-font" aria-hidden="true" />
                                    <span className="hide-menu">Brands</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                    <i className="fa fa-globe" aria-hidden="true" />
                                    <span className="hide-menu">Google Map</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" ria-expanded="false">
                                    <i className="fa fa-columns" aria-hidden="true" />
                                    <span className="hide-menu">Blank Page</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" a-expanded="false">
                                    <i className="fa fa-info-circle" aria-hidden="true" />
                                    <span className="hide-menu">Error 404</span>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
            </aside>
        </div>
    )
}

export default Sidebar
