import React from 'react'
import { FiHome } from 'react-icons/fi'
import { BsTag } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GiStabbedNote } from 'react-icons/gi'
import { FcProcess } from 'react-icons/fc'
import { BiTimeFive } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'
import { AiOutlineUnlock } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { GrAnnounce } from 'react-icons/gr'
import { GrNotes } from 'react-icons/gr'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="row m-0 p-0">
                <div className="col-2 ">
                    <div className="header">
                        <h3 className='text-center'>AthomeTrip</h3>
                    </div>
                    <div className="listSection">
                        <div className="DB">
                            <h5><FiHome /> Dashboard </h5>
                        </div>
                        <div className="SPM">
                            <p>Schedule/product mange</p>
                            <h5><BsTag /> Product</h5>
                            <h5><FaRegCalendarAlt /> BnB Schedule</h5>
                            <h5><FaRegCalendarAlt />  Schedule</h5>
                        </div>
                        <div className="Order">
                            <p>All order</p>
                            <h5><GiStabbedNote /> All Order</h5>
                        </div>
                        <div className="SMM">
                            <p>Settlement mange</p>
                            <h5><FcProcess /> Process Status</h5>
                            <h5><BiTimeFive /> Request history</h5>
                        </div>
                        <div className="AS">
                            <p>Account Setting</p>
                            <h5><CgProfile /> Profile setting</h5>
                            <h5><AiOutlineUser />  Settlement account</h5>
                            <h5><AiOutlineSetting />  Account setting</h5>
                            <h5><AiOutlineUnlock /> Change password</h5>
                        </div>
                        <div className="AP">
                            <p>Athometrip policies</p>
                            <h5><AiOutlineInfoCircle />  Terms and conditions</h5>
                            <h5><GrAnnounce /> Announcement</h5>
                            <h5><GrNotes /> Cancel/Refund policies</h5>
                            <h5><AiOutlineQuestionCircle /> FAQ</h5>
                        </div>
                    </div>
                </div>
                <div className="col-10  ">
                    <h1>Table Side</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

