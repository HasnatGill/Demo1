import React, { useState } from 'react'
import Bottom from './Bottom'
import SideBar from './SideBar'
import TopBar from './TopBar'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbArrowsDownUp } from 'react-icons/tb'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'


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


function MainPage() {

    const [fix, setFix] = useState(false)

    const leave = () => {
        setFix(false)
    }
    const hover = () => {
        setFix(true)
    }

    return (
        <div className="MainPage">
            <div className="SideBar"
            >
                <SideBar />
            </div>
            <div className="Main">
                <div className={`Scroll ${fix ? '' : 'position-fixed ContentWidth'}`}
                    onMouseEnter={hover}
                    onMouseLeave={leave}
                >

                    <div className="TopBar sticky-top">
                        <TopBar />
                    </div>
                    <div className="TableContent">
                        <div className="container">
                            <div className="row">
                                <div className="col mt-4">
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
                            <div className="row">
                                <div className="col">
                                    <div className="Table">
                                        <div className="container px-5">

                                            <table>

                                                <tr>
                                                    <th><input type="checkbox" className='me-3' />ID</th>
                                                    <th>Payment <TbArrowsDownUp /></th>
                                                    <th>Category</th>
                                                    <th>Product Title</th>
                                                    <th>Status</th>
                                                    <th><div className='text-end'>Actions</div></th>
                                                </tr>


                                                <tr>
                                                    <td><button className='my-1 px-4 rounded-3'>ID</button></td>
                                                    <td></td>
                                                    <td><select className='py-1 px-4 rounded-3 '>
                                                        <option value="">Category</option>
                                                    </select></td>
                                                    <td><input type="text" className='py-1 rounded-2 form-control' placeholder='All' /></td>
                                                    <td>
                                                        <select className='py-1 px-4 ms-2 rounded-2'>
                                                            <option value="">All</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                {
                                                    ProductData.map((item, i) => {
                                                        return (

                                                            <tr key={i}>
                                                                <td><input type="checkbox" className='me-2' />{item.ID}</td>
                                                                <td>{item.payment}</td>
                                                                <td>{item.Category}</td>
                                                                <td><img src={item.img} className='me-3 rounded-2' width={40} height={40} />{item.title}</td>
                                                                <td>{item.status}</td>
                                                                <td>
                                                                    <div className='float-end '>  <button className='py-1 me-3 px-2'>View</button>
                                                                        <button className='py-1 me-2 px-2'><BsPencil className='fs-6' /> </button>
                                                                        <button className='py-1 px-2'><RiDeleteBin6Line className='fs-6' /></button></div>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })
                                                }

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="TableFooter">
                                <div className="row mt-5">
                                    <div className="col">
                                        <div className="container px-5">

                                            <div className="left d-flex">
                                                <select className='py-1 px-4 rounded-3'>
                                                    <option value="">10</option>
                                                    <option value="">11</option>
                                                </select>
                                                <h5 className='mt-1 ms-2'>of 125</h5>
                                            </div>
                                            <div className="right">
                                                <ul>
                                                    <li><button className='py-2 px-3 bgDark rounded-2 me-1 border-0'>1</button></li>
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
                    </div>
                    <div className="PageFooter">
                        <div className="Footer">
                            <div className="container">

                                <p><b>US Headquarters:</b> Monday to Friday,24 Hours</p>
                                <p>Sat/Sun/Holiday,EST 09:00-22:00 <b>call:</b> +1 1 212-828-0100</p>
                                <p>Closed on Saturdays,Sundays, and Public Holidays <b>Call:</b> 070-8095-1520 </p>
                                <p><b>New York Lounge hours</b></p>
                                <p>Monday-Saturday 9:00-18:00</p>
                                <p>Closed:Sundays,Memorial,Independent,Thanksgiving,Christmas,New Year in store purchase and consultation with coordinator 14:00-17:00 (Cash payment only)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
