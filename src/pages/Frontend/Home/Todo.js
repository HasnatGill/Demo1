import React, { useState } from 'react'

export default function Todo() {

  const [state, setState] = useState({ email: "" })

  const handlechange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(state)
  
  }

  // const sendEmail = async (admin) => {

  //   setisProcessing(true)
  //   const url = `${window.origin}/auth/create-account/?email=${admin.email}&data=${admin.id}&state=${state.id}`
  //   let data = { ...admin, url, logo: state.logo?.url }
  //   delete data.status
  //   delete data.key

  //   emailjs.send('service_jayqowf', 'usable_invitaion_email', data, 'user_tnAVeVrREvL3j8o9A2J7k')
  //     .then((result) => {
  //       window.toastify("Invitation email has been successfully sent", "success")
  //       setisProcessing(false)
  //     }, (error) => {
  //       window.toastify("Something went wrong. Please try again.", "error")
  //       setisProcessing(false)
  //     })
  // };


  return (
    <>
      <h1 className='text-center'>React Email</h1>
      <div className='py-5 text-center'>
        <label className='fs-4 me-3'>Enter Your Email:</label>
        <input type="email" required className='w-25 rounded-3' name='email' onChange={handlechange} />
        <br />
        <div className='py-3'>
          <button className='py-2 px-3 border-0 rounded-3 bg-info fs-5' onClick={sendEmail}>Send Email</button>
        </div>
      </div>
    </>
  )
}
