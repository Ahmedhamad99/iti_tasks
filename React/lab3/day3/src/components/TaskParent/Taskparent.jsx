import Tasklist from "../TaskList/Tasklis";
import AddTask from "../AddTask/AddTask";
import { useState } from "react"

const Taskparent = ()=>{

    const [tasks,setTasks] = useState([]);

    const addTasks = (task)=>{
        if(task.trim()==="")return;
        setTasks([...tasks,{id:Date.now(),content:task,completed:false}]);
    }
    const deleteTask = (id)=>{
        setTasks(tasks.filter((task)=>task.id !== id))
    }

    const toComplete = (id)=>{
        setTasks(
            tasks.map((task)=>
            task.id==id?{...task,completed:!task.completed}:task)
        )
    }

    return <>
    <div className="container text-center mt-5">
        <h1 className="mb-4">To Do Tasks</h1>
         <AddTask addtask={addTasks}/>
         <Tasklist tasks={tasks} deleteTasks={deleteTask} complete={toComplete}/>
    </div>
    </>
  

}


export default Taskparent