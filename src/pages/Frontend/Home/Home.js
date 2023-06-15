import React, { useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';

function Home() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseError = (error) => {
    console.log(error);
  }
  const logout = () => {
    console.log('logout');
  }
  return (

    <div>
      <h2 className='text-center fw-bold display-3 py-5 bg-success'>This is Calendar Api</h2>
      <div className="d-flex justify-content-center mt-5">

        <GoogleLogin clientId='359967600577-pb331qehjd6decgfglmv5go9aag4upqn.apps.googleusercontent.com'
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy='single_host_origin'
          responseType='code'
          accessType='offline'
          scope='openid, https://www.googleapis.com/auth/userinfo.profile, https://www.googleapis.com/auth/userinfo.email], invalid=[http://www.googleapis.com/auth/calendar'
        />
        <GoogleLogout
          clientId="359967600577-pb331qehjd6decgfglmv5go9aag4upqn.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        >
        </GoogleLogout>

      </div>
    </div>
  );
}

export default Home;
