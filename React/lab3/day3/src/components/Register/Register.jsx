import { useState } from "react"



const Register = ()=>{

    const [registrData,setRegisterData] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        confirmPassword:""
    })

    const [errors,setErrors] = useState({})

    const validtion = ()=>{
        let newErrors={};
        if(!registrData.name.trim()){
            newErrors.name = "Name is Reqiured";
        }
        if(!/^\S+@\S+\.\S+$/.test(registrData.email))
        {
            newErrors.email = "Inavalid email Format"
        }
        if(/\s/.test(registrData.username))
        {
            newErrors.username = "Username must not contain spaces"
        }
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/.test(registrData.password))
         {
            newErrors.password = "Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char"
         }   
         
         if(registrData.password !== registrData.confirmPassword)
          {
            newErrors.confirmPassword = "Passwords do not match"
          }

          setErrors(newErrors)
          return Object.keys(newErrors).length === 0
        }

   
        const handelSubmit = (e)=>{
           e.preventDefault()
           if(validtion()){
            alert(JSON.stringify(registrData))
           }
        }


        return <>
        <div className="container w-50 mt-5">
           <h2 className="mb-4 text-center">Regiter</h2>
           <form onSubmit={handelSubmit} className="mb-5">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                    type="text"
                    className={`form-control ${errors.name?"is-invalid":""}`}
                    value={registrData.name}
                    onChange={(e)=>setRegisterData({...registrData,name:e.target.value})}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                        <label className="from-control">Email</label>
                        <input
                        type="email"
                        className={`form-control ${errors.email?"is-invalid":""}`}
                        value={registrData.email}
                        onChange={(e)=>setRegisterData({...registrData,email:e.target.value})}
                        />
                         {errors.email && <div className="invalid-feedback" >{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input 
                  type="text"
                  className={`form-control ${errors.username?"is-invalid":""}`}
                  value={registrData.username}
                  onChange={(e)=>setRegisterData({...registrData,username:e.target.value})}
                  />
                  {errors.username && <div className="invalid-feedback" >{errors.username}</div>}
                </div>


                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input 
                  type="password"
                  className={`form-control ${errors.password?"is-invalid":""}`}
                  value={registrData.password}
                  onChange={(e)=>setRegisterData({...registrData,password:e.target.value})}
                  />
                  {errors.password && <div className="invalid-feedback" >{errors.password}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Passwordd</label>
                  <input 
                  type="password"
                  className={`form-control ${errors.confirmPassword?"is-invalid":""}`}
                  value={registrData.confirmPassword}
                  onChange={(e)=>setRegisterData({...registrData,confirmPassword:e.target.value})}
                  />
                  {errors.confirmPassword && <div className="invalid-feedback" >{errors.confirmPassword}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">Register</button>
           </form>
        
        </div>
        
        </>
}

export default Register