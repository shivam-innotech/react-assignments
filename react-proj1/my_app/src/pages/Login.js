import React from 'react'
import {useState} from 'react'

function Login() {
  const [user, setUser] = useState({
    email:"",
    password:"",

})


const handleChange=(e)=>{
    const{name,value}=e.target ;
    setUser({
        ...user,
        [name]:value
        
    })
   console.log(user)
}

const submit=()=>{
    const{email,password}=user
    console.log(user)
    if(email&&password){
        console.log("you are successfully login");
    }else{
        console.log("invalid user");
    }
}
  return (
    <>
    <div className="form-container">
    <form action="">
        <h2>Login</h2>
        <input type="email"placeholder='E-mail' name='email' value={user.email} onChange={handleChange}/>
        <input type="password"placeholder='Password' name='password' value={user.password} onChange={handleChange}/>
        <input type="submit" className='input-submit' onClick={submit}/>

    </form>
    </div>
    </>
  )
}

export default Login