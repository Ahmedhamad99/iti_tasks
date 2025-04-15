const userModel = require("../models/users")


let getAllUser = async (req,res)=>{
   try{
    let users = await userModel.find().select("firstname")

    res.status(200).json({data:users})
   }
   catch(err){
    req.status(404).json({message:err.message})
   }
}

let getUserById = async (req,res)=>{
  let {id} = req.params
  
  try{
         let userwithIdfound = await userModel.findById(id)
         if(userwithIdfound){
          res.status(200).json({message:"found",data:userwithIdfound})
         }
         else{
          res.status(201).json({message:"not found user"})
         }
  }
  catch(err){
    req.status(404).json({message:err.message})
  }

  res.status(200).json({data:users})
}

let saveUser= async (req,res)=>{
  let user = req.body
  let image = req.file ? req.file.path:undefined
  let newUser = await userModel.create({...user,image:image})
  res.status(200).json({ message: "User saved" }); 
}


let deletUserByid=async (req,res)=>{
       let {id} = req.params
       try{
            let deltedUser = await userModel.findByIdAndDelete(id)
            if(deltedUser){
              res.status(200).json({message:"Deleted successfully"})
            }
            else{
              res.status(404).json({message:"user not founded"})
            }
       }
       catch(err){
        res.status(500).json({message:err.message})

       }
}

let UpdatById = async (req,res)=>{
     let {id} = req.params
     let newUpdat = req.body
     try{
             let updatedUser = await userModel.findByIdAndUpdate(id,newUpdat)
             
             if(updatedUser){
              res.status(200).json({message:"Found and update succesfully"})
             }
             else{
              res.status(404).json({message:"User not found"})
             }
         }
     catch(err){
      res.status(400).json({message:err.message})

     }

}

module.exports={getAllUser,saveUser,deletUserByid,UpdatById,getUserById}