import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Details from './../DetalisUser/Details';
const UserCard = ({ user }) => {
    const navigate = useNavigate()
    const handelClick = (id)=>{
        navigate(`/detalis/${id}`)
    }
    return  (
        
        <div key={user.id} className="card col-4 m-2" style={{width:"30%"}} >
            <img className="card-img-top" src="Garp-entry.webp"/>
            <div className="card-body">
                <h5 className="card-title">Name :{user.username}</h5>
                <p className="card-text">Birthe Date : {user.birthdate}</p>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone : {user.phone}</p>
                <a className="btn btn-primary m-2" onClick={()=>handelClick(user.id)}>Detail</a>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  
    ) 
                
   
     
        
          
        
    

}


export default UserCard