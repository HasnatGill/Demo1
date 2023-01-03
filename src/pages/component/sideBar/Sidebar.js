import React, { useState } from 'react'
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

    const [fix, setFix] = useState(false)

    const leave = () => {
        setFix(false)
    }

    const hover = () => {
        setFix(true)
    }


    return (
        <div className={`sidebar ${fix ? '' : 'position-fixed sidebar'}`}
            onMouseEnter={hover}
            onMouseLeave={leave}
        >
            <div className="header bg-dark">
                <img src={Logo} />
            </div>
            <div className="listSection mt-4">
                <div className="DB">
                    <h6><FiHome className='mb-1 me-1' /> Dashboard </h6>
                </div>
                <div className="SPM">
                    <p>Schedule/product mange</p>
                    <h6><BsTag className='mb-1 me-1' /> Product</h6>
                    <h6><FaRegCalendarAlt className='mb-1 me-1' /> BnB Schedule</h6>
                    <h6><FaRegCalendarAlt className='mb-1 me-1' />  Schedule</h6>
                </div>
                <div className="Order">
                    <p>All order</p>
                    <h6><GiStabbedNote className='mb-1 me-1' /> All Order</h6>
                </div>
                <div className="SMM">
                    <p>Settlement mange</p>
                    <h6><GiProcessor className='mb-1 me-1' /> Process Status</h6>
                    <h6><BiTimeFive className='mb-1 me-1' /> Request history</h6>
                </div>
                <div className="AS">
                    <p>Account Setting</p>
                    <h6><CgProfile className='mb-1 me-1' /> Profile setting</h6>
                    <h6><AiOutlineUser className='mb-1 me-1' />  Settlement account</h6>
                    <h6><AiOutlineSetting className='mb-1 me-1' />  Account setting</h6>
                    <h6><AiOutlineUnlock className='mb-1 me-1' /> Change password</h6>
                </div>
                <div className="AP">
                    <p>Athometrip policies</p>
                    <h6><AiOutlineInfoCircle className='mb-1 me-1' />  Terms and conditions</h6>
                    <h6><TfiAnnouncement className='mb-1 me-1' /> Announcement</h6>
                    <h6><CgNotes className='mb-1 me-1' /> Cancel/Refund policies</h6>
                    <h6><AiOutlineQuestionCircle className='mb-1 me-1' /> FAQ</h6>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

