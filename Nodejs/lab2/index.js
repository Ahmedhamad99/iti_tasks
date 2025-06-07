

const express = require("express")


const app=express()


const fs = require("fs")


app.use(express.json())

app.get("/todo",(req,res)=>{
    const limit = (+req.query.limit) || 10;
    const skip = (+req.query.skip) ||0;
    
    fs.readFile("./todo.json","utf-8",(err,data)=>{
        if(err)
        {
            res.json({message:"Faild",data:todo})
        }
        else{

            let todos = JSON.parse(data)
            let todosFilterd = todos.slice(skip,skip+limit);
            res.json({message:"succes",data:todosFilterd})
        }
    })
 
}) 

 
app.post("/todo",(req,res)=>{
    console.log(req.body)
    let newtodo = req.body
    fs.readFile("./todo.json",'utf-8',(err,data)=>{
        let todos = JSON.parse(data);

        if(newtodo.id){
            todos.push(newtodo)
        }
        else{
            id_d = todos[todos.length-1].id + 1
            

            todos.push({id:id_d,...newtodo})
        }
        fs.writeFile("./todo.json",JSON.stringify(todos),(err)=>{
            res.status(201).json({message:"succes",data:newtodo})

        });

    })
  
    

})   


app.get("/todo/:id",(req,res)=>{
    const {id} = req.params
    console.log(id)
    
    fs.readFile("./todo.json","utf-8",(err,data)=>{
        let todos = JSON.parse(data)
        console.log(todos)
        let todoWithId = todos.find((todo)=>todo.id==+id)
        console.log(todoWithId)
        if(todoWithId){
            res.json({message:"succes",data:todoWithId})
        }
        else{
            res.json({message:"Falid",data:"there is no data"})
        }
    })
    
 }) 
 



app.patch("/todo/:id",(req,res)=>{
    const {id} = req.params
    const newTodo = req.body
    console.log(newTodo)

    fs.readFile("./todo.json","utf-8",(err,data)=>{
        let todos = JSON.parse(data)

        let todoUpTodate = todos.find((todo)=>todo.id==id)
        console.log(todoUpTodate)
        if(todoUpTodate){
            todoUpTodate.id = todoUpTodate.id
            todoUpTodate.title = newTodo.title
            todoUpTodate.status = newTodo.status
            fs.writeFile("./todo.json",JSON.stringify(todos),(err)=>{
                   if(err)
                   {
                    res.json({message:"Falid"})
                   }
                   else(
                    res.json({message:"success"})
                   )
            })
           
        }
        else{
            res.json({message:"faild"})
        }
    })
})



app.delete("/todo/:id",(req,res)=>{
    const {id} = req.params
    
    fs.readFile("./todo.json","utf-8",(err,data)=>{
        let todos = JSON.parse(data)

        let todoToDelet = todos.findIndex((todo)=>todo.id==id)
         console.log(todos[todoToDelet])
         console.log(todoToDelet)
        if(todos[todoToDelet]){
            todos.splice(todoToDelet,1)
            fs.writeFile("./todo.json",JSON.stringify(todos),(err)=>{
                if(err)
                {
                    res.json({message:"Deleted Falid"})
                }
                else{
                    res.json({message:"Deleted Success"})
                }
            })
        }
    })
})





app.listen(3333,()=>{
    console.log("app listenning succussfully in port 3333")
})


