const express = require("express");
const { connection } = require("./db");

const app = express();
const cors = require("cors");
const { boardRouter } = require("./Routes/board.route");

app.use(express.json());
app.use(cors());

app.use("/kanban", boardRouter);

app.listen(5050, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is runing at 5050");
});
