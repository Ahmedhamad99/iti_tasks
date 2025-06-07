
const fs = require("fs");
const [,, command] = process.argv;

const readData = () => JSON.parse(fs.readFileSync("./data.json", "utf8"));
const writeData = (data) => fs.writeFileSync("./data.json", JSON.stringify(data));

function addTask(title) {
  const data = readData();
  const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  data.push({ id, title, status: "to-do" });
  writeData(data);
  console.log("task created successfully.");
}

function listTasks(statusFilter) {
  const data = readData();
  const filtered = statusFilter ? data.filter(item => item.status === statusFilter) : data;
  filtered.forEach((task, index) => {
    console.log(`${index + 1}: title => ${task.title} | status: ${task.status}`);
  });
}

function deleteTask(todoTitleOrId) {
  const data = readData();
  let index = data.findIndex(item => item.title === todoTitleOrId || item.id == todoTitleOrId);

  if (index === -1) {
    console.log("task not found.");
    return;
  }

  data.splice(index, 1);
  writeData(data);
  console.log("task deleted successfully.");
}

function editTask(inputs) {
    const data = readData();
  
    let id = null;
    let newTitle = null;
    let newStatus = null;
    for (let i = 3; i < inputs.length; i++) {
      switch (inputs[i]) {
        case "-t":
          newTitle = inputs[i + 1];
          i++;
          break;
        case "-s":
          newStatus = inputs[i + 1];
          i++;
          break;
        case "--id":
          id = inputs[i + 1];
          i++;
          break;
      }
    }
    console.log(id)
  
    if (!id) return console.log("please provide --id.");
    if (!newTitle && !newStatus) {
      return console.log("please provide at least -t (title) or -s (status) to edit.");
    }
  
    const index = data.findIndex(task => task.id == id);
    if (index === -1) return console.log("task not found.");
  
    if (newTitle) data[index].title = newTitle;
    if (newStatus) {
      const validStatuses = ["to-do", "in progress", "done"];
      if (!validStatuses.includes(newStatus.toLowerCase())) {
        return console.log("invalid status. Use one of: to-do, in progress, done");
      }
      data[index].status = newStatus;
    }
  
    writeData(data);
    console.log("task updated successfully.");
  }
  


switch (command) {
  case "add":
    addTask(process.argv[3]);
    break;

  case "list":
    listTasks(process.argv[3]);
    break;

  case "delete":
    deleteTask(process.argv[3]);
    break;

  case "edit":
    editTask(process.argv);
    break;

  default:
    console.log("unknown command. use: add | list | delete | edit");
}
