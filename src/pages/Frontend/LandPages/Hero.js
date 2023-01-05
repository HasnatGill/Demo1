import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'
import Phone from '../../../pics/Phone.png'
import { RiCheckDoubleFill } from 'react-icons/ri'
import { MdOutlineFingerprint } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'
import { MdOutlineTune } from 'react-icons/md'
import { MdBusiness } from 'react-icons/md'
import { TbArrowWaveRightUp } from 'react-icons/tb'
import CountUp from 'react-countup';
import { BsCheck2 } from 'react-icons/bs'
import Personal from '../../../pics/Presonal.png'
import { AiOutlinePlus } from 'react-icons/ai'
import Company from '../../../pics/Company.png'

const MainContant = [
    {
        Img: require("../../../pics/Insights.png"),
        Header: "TRAFFIC SOURCE",
        Title: "Insights & Spam detection.",
        DesHeader: "Open stage API",
        Des: "with a core feature of data occaecat cupidatat proident, taken possession of my entire soul like these sweet mornnings.",
        Id: 0
    },
    {
        Img: require("../../../pics/Stage.png"),
        Header: "TRAFFIC SOURCE",
        Title: "Stage reporting with 50k+ queries",
        DesHeader: "Open stage API",
        Des: "with a core feature of data occaecat cupidatat proident, taken possession of my entire soul like these sweet mornnings.",
        Id: 1
    },
    {
        Img: require("../../../pics/fast.png"),
        Header: "TRAFFIC SOURCE",
        Title: "Fast matching with contant delivery.",
        DesHeader: "Open stage API",
        Des: "with a core feature of data occaecat cupidatat proident, taken possession of my entire soul like these sweet mornnings.",
        Id: 2
    },

]

const ContantIcon = [
    {
        icon: <RiCheckDoubleFill className='icon' />,
        title: `Location Confirmation`,
        Id: 0,
    },
    {
        icon: <MdOutlineFingerprint className='icon' />,
        title: "Passcode and Touch ID",
        Id: 1,
    },
    {
        icon: <RiMessage2Fill className='icon' />,
        title: "Instant Alerts",
        Id: 2,
    },
    {
        icon: <MdOutlineTune className='icon' />,
        title: "Messages Editing",
        Id: 3,
    },
    {
        icon: <TbArrowWaveRightUp className='icon' />,
        title: "Data Tracking",
        Id: 3,
    },
    {
        icon: <MdBusiness className='icon' />,
        title: "Additional Storage",
        Id: 3,
    },
]

function Hero() {
    return (
        <>
            <div className="container">
                <div className="main_1">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-4">
                            <div className="playbutton">
                                <AiFillPlayCircle className='play' />
                                <h5>Play Promo</h5>
                            </div>
                            <div className="text">
                                <h1>Get more, make less.</h1>
                                <p>A mobile tracking experience for your online business budget.</p>
                            </div>
                            <div className="button">
                                <p>Available now</p>
                                <div className="applebutton">
                                    <button>
                                        <div className="flex">
                                            <AiFillApple className='apple' />
                                            <p>Download on the<br /><span>Apple Store</span></p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-8">
                            <div className="image">
                                <img src={Phone} alt="Phone" width={750} height={550} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_2_3_4">
                    {
                        MainContant.map((item, i) => {
                            return (
                                <div className="main_2" key={i}>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 p-0 m-0 ">
                                            <div className="image">
                                                <img src={item.Img} alt="Insights & Span" width={450} height={650} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 p-0 m-0 Contant_Center">
                                            <div className="text">
                                                <h5>{item.Header}</h5>
                                                <h1>{item.Title}</h1>
                                                <p><span>{item.DesHeader}</span>{item.Des}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="main_5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 Contant_Center">
                            <div className="text">
                                <h5>FUNCTIONAL</h5>
                                <h1>Experted Features.</h1>
                                <p>Reductions in Operating costs for the whole product team which creates amazing UI/UX</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 ">
                            <div className="row p-5">
                                {
                                    ContantIcon.map((item, i) => {
                                        return (
                                            <div key={i} className="col-lg-4 col-md-6 Icon_Contant">
                                                <div className="Icons">
                                                    <div >{item.icon}</div>
                                                    <h5>{item.title}</h5>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_6">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="text_1">
                                <h1><CountUp start={0} end={35} duration={2} />+</h1>
                                <p>Requests <br /> per second</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="text_2">
                                <h1><CountUp start={0} end={75} duration={2} />+</h1>
                                <p>New leads <br /> Per month</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="text_3">
                                <p>When our team provides design and digital marketing. Applied arts can include <span>industrial design, graphic design</span>, fashion design. The app provides design and digital marketing, applied arts can include industrial design, graphic design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card_1">
                                <h5>NO HIDDEN FEES</h5>
                                <h2>Simple <br /> pricing.</h2>
                                <p>Offer valid on January 5, 2022 <br /> for a limited time only.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card_2">
                                <img src={Personal} alt="Personal" width={75} height={75} />
                                <h4>Personal</h4>
                                <h1>$5</h1>
                                <h6>Month</h6>
                                <p>Get the current deal without <br /> any risk and additional fees.</p>
                                <div><BsCheck2 className='ture me-2' /> Unlimited updates & products</div>
                                <div><BsCheck2 className='ture me-2' /> Custom permissions</div>
                                <div className='disable'><AiOutlinePlus className='false me-2' />Custom Infrastructure</div>
                                <button>Get Started</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="card_2">
                                <img src={Company} alt="Personal" width={75} height={75} />
                                <h4>Company</h4>
                                <h1>$35</h1>
                                <h6>Month</h6>
                                <p>Get the current deal without <br /> any risk and additional fees.</p>
                                <div><BsCheck2 className='ture me-2' /> Unlimited updates & products</div>
                                <div><BsCheck2 className='ture me-2' /> Custom permissions</div>
                                <div><BsCheck2 className='ture me-2' />Custom Infrastructure</div>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="text_1">
                                <div>GET HLEP (HLEP CENTER)</div>
                                <h2>Frequently asking questions.</h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="text_2">
                                <h6><AiOutlinePlus className='plus me-2' />How does the 14-day trial work? </h6>
                                <h6><AiOutlinePlus className='plus me-2' />How do I pay for your service? </h6>
                                <h6><AiOutlinePlus className='plus me-2' />How can I cancel Subscription? </h6>
                                <h6><AiOutlinePlus className='plus me-2' />Can I recover an expired account? </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_9">
                <div className="card_1">
                    <div className="text">
                        <h2><CountUp start={0} end={28} duration={1} />+</h2>
                        <p>designers and <br /> developers</p>
                    </div>
                </div>
                <div className="card_2">
                    <div className="text">
                        <h2><CountUp start={0} end={345} duration={1} />+</h2>
                        <p>awards for digital <br /> innovation</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero