import React from 'react'
import { FiHome } from 'react-icons/fi'
import { BsTag } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GiStabbedNote } from 'react-icons/gi'
import { GiProcessor } from 'react-icons/gi'
import { BiTimeFive } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'
import { AiOutlineUnlock } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { TfiAnnouncement } from 'react-icons/tfi'
import { CgNotes } from 'react-icons/cg'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import Logo from "../../../pics/logo.svg"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">
                <img src={Logo} />
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
                    <h5><GiProcessor /> Process Status</h5>
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
                    <h5><TfiAnnouncement /> Announcement</h5>
                    <h5><CgNotes /> Cancel/Refund policies</h5>
                    <h5><AiOutlineQuestionCircle /> FAQ</h5>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
