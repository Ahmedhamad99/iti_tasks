import { useState } from "react";


const AddTask = ({addtask})=>{


  const [task, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addtask(task);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex justify-content-center">
      <input
        type="text"
        value={task}
        onChange={(e) => setTaskText(e.target.value)}
        className="form-control w-50"
        placeholder="Enter new task"
      />
      <button type="submit" className="btn btn-primary ms-2">Add</button>
    </form>
  );

}
export default AddTask
