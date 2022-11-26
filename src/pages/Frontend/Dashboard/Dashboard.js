import React from 'react'
import TopBar from '../../component/DashTopBar'
import Sidebar from '../../component/sideBar'
import { AiOutlinePlus } from 'react-icons/ai'
import { Th, Tr, Thead, Table, Td, Tbody } from 'react-super-responsive-table'
import { TbArrowsDownUp } from 'react-icons/tb'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsPencil } from 'react-icons/bs'

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="row m-0 p-0">
                <div className="col-2 SidebarSection">
                    <Sidebar />
                </div>
                <div className="col-10 ">
                    <div className="row sticky-top">
                        <div className="col">
                            <TopBar />
                        </div>
                    </div>
                    <div className="row mt-5 px-5">
                        <div className="col">
                            <div className="container">
                                <div className="header">
                                    <div className="left">
                                        <h5>All Product: <span>252</span></h5>
                                    </div>
                                    <div className="right">
                                        <button className='py-1 px-3'><AiOutlinePlus /> Create new product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 px-4">
                            <div className="col">
                                <div className="table ">
                                    <div className="container">
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th>ID</Th>
                                                    <Th>Payment <TbArrowsDownUp /></Th>
                                                    <Th>Category</Th>
                                                    <Th>Product Title</Th>
                                                    <Th>Status</Th>
                                                    <Th>Actions</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td>ID254</Td>
                                                    <Td>$302.00</Td>
                                                    <Td>Ticket/Pass</Td>
                                                    <Td>Center Park New York</Td>
                                                    <Td>Complete</Td>
                                                    <Td>
                                                        <button>View</button>
                                                        <button><BsPencil /> </button>
                                                        <button><RiDeleteBin6Line /></button>
                                                    </Td>
                                                </Tr>

                                            </Tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

