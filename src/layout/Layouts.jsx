import React from 'react'
import Sidebar from '../components/Sidebar'
import TopHeader from './../components/TopHeader.component'
import Footer from '../components/Footer.component'
import { Link } from 'react-router-dom'



const Layouts = (props) => {
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Sidebar />
            <TopHeader />
            <div className="page-wrapper">
                <div className="page-breadcrumb bg-white mb-12">
                    <div className="row align-items-center">
                        <span className="col-lg-12 col-md-4 col-sm-4 col-xs-12">
                            <h1 className="page-title">{props.title}
                                <span>
                                    <Link to={props.path} className="float-right btn btn-primary">Back</Link>
                                </span>
                            </h1>
                        </span>

                    </div>
                </div>
                {
                    props.children
                }
                <Footer />
            </div>
        </div>

    )
}

export default Layouts
