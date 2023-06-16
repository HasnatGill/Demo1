import React from 'react'
import { useState } from 'react'
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, EmailIcon } from 'react-share';

function AddDropDown() {

  const [file, setFile] = useState()

  const handleChange = (e) => {
    setFile(e.target.files)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(file, "this is file")
  }

  const shareUrl = 'https://www.example.com';
  const title = 'Example Page';


  return (
    <div>
      <form>
        <input type="file" onChange={handleChange} />
        <button onClick={submit}>Submit</button>
      </form>
      <div>
        <div>
          <FacebookShareButton url={shareUrl} quote={title} className="me-5" style={{marginRight:50}}>
            <FacebookIcon size={32} viewBox />
          </FacebookShareButton>
        </div>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <EmailShareButton url={shareUrl} subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  )
}

export default AddDropDown