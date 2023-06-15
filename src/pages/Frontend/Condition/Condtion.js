import React, { useState } from 'react'


function Condtion() {
    const [loading, setLoading] = useState(true)

    const handleLogin = () => {
        setLoading(false)
        setTimeout(() => {
            console.log("this is testing")
            setLoading(true)
        }, 3000);
        setLoading(true)

    }

    return (
        <div>
            <button className='btn btn-primary' onClick={handleLogin}>
                {
                    !loading
                        ?
                        "Loading"
                        :
                        "login"
                }
            </button>
        </div>
    )
}

export default Condtion