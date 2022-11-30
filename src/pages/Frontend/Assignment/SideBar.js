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


function SideBar() {

  const [fix, setFix] = useState(false)

  const leave = () => {
    setFix(false)
  }

  const hover = () => {
    setFix(true)
  }


  return (
    <div className={`SideBarContent ${fix ? '' : 'position-fixed width'}`}
      onMouseEnter={hover}
      onMouseLeave={leave}
    >

      <div className="Header bg-dark">
        <img src={Logo} alt="" />
      </div>
      <div className="ButtonList">
        <div className="DB">
          <button><FiHome className='mb-1 me-1' /> Dashboard </button>
        </div>
        <div className="SPM">
          <p>Schedule/product mange</p>
          <button><BsTag className='mb-1 me-1' /> Product</button>
          <button><FaRegCalendarAlt className='mb-1 me-1' /> BnB Schedule</button>
          <button><FaRegCalendarAlt className='mb-1 me-1' />  Schedule</button>
        </div>
        <div className="Order">
          <p>All order</p>
          <button><GiStabbedNote className='mb-1 me-1' /> All Order</button>
        </div>
        <div className="SMM">
          <p>Settlement mange</p>
          <button><GiProcessor className='mb-1 me-1' /> Process Status</button>
          <button><BiTimeFive className='mb-1 me-1' /> Request history</button>
        </div>
        <div className="AS">
          <p>Account Setting</p>
          <button><CgProfile className='mb-1 me-1' /> Profile setting</button>
          <button><AiOutlineUser className='mb-1 me-1' />  Settlement account</button>
          <button><AiOutlineSetting className='mb-1 me-1' />  Account setting</button>
          <button><AiOutlineUnlock className='mb-1 me-1' /> Change password</button>
        </div>
        <div className="AP">
          <p>Athometrip policies</p>
          <button><AiOutlineInfoCircle className='mb-1 me-1' />  Terms and conditions</button>
          <button><TfiAnnouncement className='mb-1 me-1' /> Announcement</button>
          <button><CgNotes className='mb-1 me-1' /> Cancel/Refund policies</button>
          <button><AiOutlineQuestionCircle className='mb-1 me-1' /> FAQ</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar
