import React from 'react'
import Sidebar from '../../component/sideBar'


function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="row m-0 p-0">
                <div className="col-2 bg-dark text-white">
                 <Sidebar/>
                </div>
                <div className="col-10  ">
                    <h1>Table Side</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

