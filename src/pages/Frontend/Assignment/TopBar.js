import React from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import { TbWorld } from "react-icons/tb";
import Profile from '../../../pics/profile.jpeg'


function TopBar() {
  return (
    <div className="TopBarContent sticky-top">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="left">
              <h2>Product</h2>
            </div>
            <div className="right">
              <div className="language mt-2">
                <TbWorld className='fs-5 mb-1' />
                <select >
                  <option value="EN">EN</option>
                  <option value="UDR">UDR</option>
                </select>
              </div>
              <div className="icon mx-2 mt-2">
                <AiOutlineBell className='fs-4 mb-1 ' />
                <span className="translate-middle text-white badge rounded-pill bg-warning  px-1  start-100">
                  1
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
              <div className="Profile mx-2">
                <img src={Profile} className='profile' />
                <h5 className='mt-1 ms-1'>Delowar</h5>
              </div>
              <div className="button mx-2">
                <button className='py-1 px-3 rounded-3'>Traveler mode</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
