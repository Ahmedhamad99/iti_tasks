
const express = require("express")

let router = express.Router()

let todoFunc = require("../controllers/todos")


router.get("/",todoFunc.getAllTodos) 

router.post("/",todoFunc.savtNewTodos)   


router.get("/:id",todoFunc.getTodoById) 
 
router.get("/user/:id",todoFunc.TodoByUseId)


router.patch("/:id",todoFunc.editTodoByid)



router.delete("/:id",todoFunc.deletTodoById)



module.exports=router