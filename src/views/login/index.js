import './index.css'

export const Login = (props) => {
  return (
    <div className='login-container'>
      <div className='login-form' >
        <div className='form-head'>Sign in</div>
        <div className='form-content'>
          <div className='input-container'>
            <input className='username input' placeholder='Username' type="text" ></input>
            <input className='password input' placeholder='Password' type="password" ></input>
            <div className='forgot-account-container'>
              <a className='forgot-account'>Forgot Username/Password?</a>
            </div>
          </div>

          <div className='signin-container'>
            <button className='signin'>SIGN IN</button>
          </div>

          <div className='signup-container'>
            <div className='signup-title'>Don't have account?</div>
            <a className='signup'>SIGN UP NOW</a>
          </div>
        </div>
      </div>
    </div>
  )
}
