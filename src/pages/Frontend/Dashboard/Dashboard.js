import React from 'react'
import TopBar from '../../component/DashTopBar'
import Sidebar from '../../component/sideBar'
import { AiOutlinePlus } from 'react-icons/ai'
import { Th, Tr, Thead, Table, Td, Tbody } from 'react-super-responsive-table'
import { TbArrowsDownUp } from 'react-icons/tb'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'
import Footer from '../../component/DashFooter'

let ProductData = [
    {
        id: "0",
        title: "Status of Liberty",
        img: require("../../../pics/York.jpg"),
        status: "Pending",
        ID: "ID123",
        payment: "$250.00",
        Category: "Hotel"
    },
    {
        id: "1",
        title: "Center Park New York",
        img: require("../../../pics/York.jpg"),
        status: "Complete",
        ID: "ID456",
        payment: "$300.00",
        Category: "Ticket/Pass"
    },
    {
        id: "2",
        title: "Museum of Modern Art",
        img: require("../../../pics/York.jpg"),
        status: "Waiting Payment",
        ID: "ID0789",
        payment: "$890.00",
        Category: "Snapshot"
    },
    {
        id: "3",
        title: "Metropolitan Museum Art",
        img: require("../../../pics/York.jpg"),
        status: "Processing",
        ID: "ID147",
        payment: "$330.00",
        Category: "Ticket/Pass"
    },
    {
        id: "4",
        title: "The Lion King",
        img: require("../../../pics/York.jpg"),
        status: "Complete",
        ID: "ID0258",
        payment: "$650.00",
        Category: "Musical/Show"
    },
    {
        id: "5",
        title: "Dear Evan Hanson",
        img: require("../../../pics/York.jpg"),
        status: "Waiting payment",
        ID: "ID0963",
        payment: "$390.00",
        Category: "Hotel/B&B"
    },
    {
        id: "6",
        title: "Aladdin",
        img: require("../../../pics/York.jpg"),
        status: "Processing",
        ID: "ID7563",
        payment: "$780.00",
        Category: "Taxi/shuttle"
    },
    {
        id: "7",
        title: "Harry Potter Cursed child",
        img: require("../../../pics/York.jpg"),
        status: "Complete",
        ID: "ID7896",
        payment: "$450.00",
        Category: "Sim card"
    },
    {
        id: "8",
        title: "Hiking Tour Guide",
        img: require("../../../pics/York.jpg"),
        status: "Pending",
        ID: "ID159",
        payment: "$550.00",
        Category: "Guided Tour"
    },
    {
        id: "9",
        title: "New York Museum of Art",
        img: require("../../../pics/York.jpg"),
        status: "Complete",
        ID: "ID268",
        payment: "$300.00",
        Category: "Taxi/Shuttle"
    },
]

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="row m-0 p-0">
                <div className="col-2 SidebarSection">
                    <Sidebar />
                </div>
                <div className="col-10">
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
                        <div className="row mt-5 ">
                            <div className="col">
                                <div className="table">
                                    <div className="container px-2">
                                        <Table>
                                            <Thead>
                                                <Tr>
                                                    <Th><input type="checkbox" className='me-3' />ID</Th>
                                                    <Th>Payment <TbArrowsDownUp /></Th>
                                                    <Th>Category</Th>
                                                    <Th>Product Title</Th>
                                                    <Th>Status</Th>
                                                    <Th><div className='text-end'>Actions</div></Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody >
                                                <Tr>
                                                    <Td><button className='my-1 px-4 rounded-3'>ID</button></Td>
                                                    <Td></Td>
                                                    <Td><select className='py-1 px-4 rounded-3 '>
                                                        <option value="">Category</option>
                                                    </select></Td>
                                                    <Td><input type="text" className='py-1 rounded-2 form-control' placeholder='All' /></Td>
                                                    <Td>
                                                        <select className='py-1 px-4 ms-2 rounded-2'>
                                                            <option value="">All</option>
                                                        </select>
                                                    </Td>
                                                </Tr>
                                                {
                                                    ProductData.map((item, i) => {
                                                        return (

                                                            <Tr key={i}>
                                                                <Td><input type="checkbox" className='me-2' />{item.ID}</Td>
                                                                <Td>{item.payment}</Td>
                                                                <Td>{item.Category}</Td>
                                                                <Td><img src={item.img} className='me-3 rounded-2' width={40} height={40} />{item.title}</Td>
                                                                <Td>{item.status}</Td>
                                                                <Td>
                                                                    <div className='float-end '>  <button className='py-1 me-3 px-2'>View</button>
                                                                        <button className='py-1 me-2 px-2'><BsPencil className='fs-6' /> </button>
                                                                        <button className='py-1 px-2'><RiDeleteBin6Line className='fs-6' /></button></div>
                                                                </Td>
                                                            </Tr>

                                                        )
                                                    })
                                                }
                                            </Tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 px-4">
                            <div className="col">
                                <div className="container Footer">
                                    <div className="footer">
                                        <div className="left d-flex">
                                            <select className='py-1 px-4 rounded-3'>
                                                <option value="">10</option>
                                                <option value="">11</option>
                                            </select>
                                            <h5 className='mt-1 ms-2'>of 125</h5>
                                        </div>
                                        <div className="right">
                                            <ul>
                                                <li><button className='py-2 px-3 bgWarning rounded-2 me-1 border-0'>1</button></li>
                                                <li><button className='py-2 px-3 bgDark rounded-2 me-1 border-0'>2</button></li>
                                                <li><button className='py-2 px-3 bgDark rounded-2 me-1 border-0'>3</button></li>
                                                <li><button className='py-2 px-3 bgDark rounded-2 me-1 border-0'>4</button></li>
                                                <li><button className='py-2 px-3 bgDark rounded-2 me-1 border-0'>5</button></li>
                                                <li><button className='py-2 px-3 bgDark rounded-2 me-1 border-0'><AiOutlineRight /></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

