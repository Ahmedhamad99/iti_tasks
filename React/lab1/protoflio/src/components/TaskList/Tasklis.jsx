

const Tasklist = ({tasks,deleteTasks,complete})=>{

   return <>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
            <tr className="bg-primary">
                <th>Task</th>
                <th>Sataus</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
            tasks.map((task)=>(
                <tr key={task.id}>
                    <td>{task.content}</td>
                    <td>{(task.completed)?"Completed":"Not Completed"}</td>
                    <td>
                    <button className="btn btn-danger btn-sm" onClick={() => complete(task.id)}>
                       Completed
                    </button>
                        |
                    <button className="btn btn-danger btn-sm" onClick={() => deleteTasks(task.id)}>Delete</button>
                        
                    </td>
                </tr>
            ))
           }
        </tbody>
      </table>
   </>
}

export default Tasklist