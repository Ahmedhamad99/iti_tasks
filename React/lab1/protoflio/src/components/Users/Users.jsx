import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import {useState} from "react";
import { Row } from 'react-bootstrap';
import UserCard from "../UserCard/UserCard";
const userData = [

    { id: 1, username: "ali", email: "ali@gmail.com", phone: "123456789", birthdate: "1990-01-01"},
    { id: 2, username: "ahmed", email: "ahmed@gmail.com", phone: "123456789", birthdate: "1995-05-15"},
    { id: 3, username: "mohamed", email: "mohamed@gmail.com", phone: "123456789", birthdate: "1988-08-20" },
];



              
            
                    





const UserList = ()=>{
    const [filterUser,setFilterUser] = useState(userData)
    const [search,setSearch] = useState("")



    const handelSearch = ()=>{
        setFilterUser(userData.filter(user=>user.email.includes(search)))
    }
    const handelRestsearch = ()=>{
        setSearch("")
        setFilterUser(userData)
    }

   return <>
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Users</h1>
      <div className="flex gap-2 mb-4 w-full justify-center items-center">
  <input
    type="text"
    className="border p-2 rounded text-center"
    placeholder="Search by email"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button 
    onClick={handelSearch} 
    className="bg-blue-500 text-white px-4 py-2 rounded">
    Search
  </button>
  {search && (
    <button 
      onClick={handelRestsearch} 
      className="bg-gray-500 text-white px-4 py-2 rounded">
      Reset
    </button>
  )}
</div>

      <div className="row">
        {filterUser.map(user =>(
                  <UserCard user={user}/>
              
        ))}
      </div>
      </div>
    
    </>


}


export default UserList