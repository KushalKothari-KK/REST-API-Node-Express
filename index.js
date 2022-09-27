import express from "express";
import bodyParser from "body-parser";

// .js is required
import usersRoutes from "./routes/users.js";

// to create express
const app = express();
// to create PORT
const PORT = 5000;

//will use json data in app
app.use(bodyParser.json());

// routes

app.use("/users", usersRoutes);

// Creating Route

app.get("/", (req, res) => {
  res.send("Hello From Homepage");
});

//listen for incoming request
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
