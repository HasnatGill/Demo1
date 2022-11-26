import React from 'react'
import { AiOutlineBell } from 'react-icons/ai'
import Profile from '../../../pics/profile.jpeg'

function TopBar() {
    return (
        <div className='DashBoardTopBar'>
            <div className="row">
                <div className="col">
                    <div className="left">
                        <h4>Product</h4>
                    </div>
                    <div className="right">
                        <div className="language">
                            <select >
                                <option value="EN">EN</option>
                                <option value="UDR">UDR</option>
                            </select>
                        </div>
                        <div className="icon">
                            <AiOutlineBell />
                        </div>
                        <div className="Profile">
                            <img src={Profile} className='profile'/>
                            <h6>Profile</h6>
                        </div>
                        <div className="button">
                            <button>Traveler mode</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar
