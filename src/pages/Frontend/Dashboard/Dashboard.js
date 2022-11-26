import React from 'react'
import TopBar from '../../component/DashTopBar'
import Sidebar from '../../component/sideBar'


function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="row m-0 p-0">
                <div className="col-2 SidebarSection">
                    <Sidebar />
                </div>
                <div className="col-10  ">
                    <div className="row">
                        <div className="col">
                            <TopBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

