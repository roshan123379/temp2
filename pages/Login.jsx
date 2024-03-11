import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [details,setDetails] = useState({email:"",password:""})
    const navigate = useNavigate()


    const submit = async(e)=>{
        e.preventDefault()
        console.log({body:JSON.stringify({password:details.password,email:details.email})})
         const response = await fetch("http://localhost:5000/api/loginuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({password:details.password,email:details.email})
         })
         if(response.ok){
           navigate("/")
         }
         const json = await response.json()
         console.log(json)
         if(!json.success){
            alert("please enter valid details")
         }
         if(json.success){
          localStorage.setItem("authToken",json.authToken)
          console.log(localStorage.getItem("authToken"))
        
       }
    }
    const onchange = (event)=>{
        setDetails({...details,[event.target.name]:event.target.value})
    }
    return (
        <>
            <div className='container'>
            <form onSubmit={submit}>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={details.email} onChange={onchange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={details.password} onChange={onchange}/>
                </div>
                

                <button type="submit" className="btn btn-primary">Submit</button>
               
            </form>
        </div>
        </>
        
    )
}
export default Login