import React, { useState } from 'react'
import './login.css'
import axios from 'axios'

function Login() {
  const [log,setlog] = useState({user:'',password:''})
  
  function handlelog(l){
      setlog({...log,[l.target.name] : l.target.value})
  }

  async function handlelogsubmit(l){
    l.preventDefault()
    alert('Login Successfully');
    try{
      const res = await axios.post("http://localhost:2211/login",log)
      alert('register')
    }
    catch(er){
      alert('not register',er)
    }
    setlog({user:'',password:''})
  }

  return (
    <div className='login'>
      <form onSubmit={handlelogsubmit} className='innerlogin'>
        <h1>Login</h1>
        <div className='logininput'>
          <h5>Username or email address *</h5>
          <input type='text' value={log.user} name='user' required onChange={handlelog} />
        </div>
        <div className='logininput'>
          <h5>Password *</h5>
          <input type='text' value={log.password} name='password' required onChange={handlelog}/>
        </div>
        <div className='remember'>
          <input type='checkbox' required/>
          <h5>Remenber me</h5>
        </div>
        <div className='loginbut'>
          <button>LOG IN</button>
        </div>
        <h5>Lost your password?</h5>
      </form>
    </div>
  )
}

export default Login
