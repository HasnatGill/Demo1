import React from 'react'
import { useState } from 'react'




function AddDropDown() {

  const [file,setFile] =useState()

  const handleChange =(e)=>{
    setFile(e.target.files)
  }

  const submit =(e)=>{
    e.preventDefault()
    console.log(file,"this is file")
  }


  return (
    <div>
      <form>
        <input type="file" onChange={handleChange} />
        <button onClick={submit}>Submit</button>
      </form>

    </div>
  )
}

export default AddDropDown