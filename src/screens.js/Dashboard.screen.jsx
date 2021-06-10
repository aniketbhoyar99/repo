import React from 'react'
import DashbordHandler from '../components/DashbordHandler'
import Sidebar from '../components/Sidebar'
import Layouts from '../layout/Layouts'



const Dashboard = () => {
    return (
        <Layouts title="Dashboard" path="/">
            <div className="container-fluid" >
                <div className="row justify-content-center">
                    <DashbordHandler value="500" title="total visit" />
                    <DashbordHandler value="760" title="total orders" />
                    <DashbordHandler value="800" title="total customer" />
                </div>

            </div>
        </Layouts>
    )
}

export default Dashboard
