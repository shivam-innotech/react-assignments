import React from 'react'
import {useState} from 'react'

function Signup() {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",

    })


    const handleChange=(e)=>{
        const{name,value}=e.target ;
        setUser({
            ...user,
            [name]:value
        })
        console.log(user);
    }
  
    const submit=()=>{
        const{name,email,password}=user
        if(name&&email&&password){
            console.log("data submitted");
        }else{
            console.log("error");
        }
        console.log(user);
    }

  return (
    <>
    <div className="form-container">
    <form action="">
        <h2>Signup</h2>
        <input type="text"placeholder='Name' name='name' value={user.name} onChange={handleChange} />
        <input type="email"placeholder='E-mail' name='email' value={user.email} onChange={handleChange}/>
        <input type="password"placeholder='Password' name='password' value={user.password} onChange={handleChange}/>
        <input type="submit" className='input-submit' onClick={submit}/>

    </form>
    </div>
    
    </>
  )
}

export default Signup