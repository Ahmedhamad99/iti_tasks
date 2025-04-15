require("dotenv").config();
const cors = require("cors")

const express = require("express")
const mongoose = require("mongoose")
//"mongodb://127.0.0.1:27017/todoApp"
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });



let todorouter = require("./routes/todos")
let usersrouter = require("./routes/users")
const app=express()





app.use(express.json())
app.use(cors())
app.use(express.static("static"))


app.use("/todo",todorouter);
app.use("/users",usersrouter);
app.use((req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`App connect successfully on port ${PORT}`);
});


