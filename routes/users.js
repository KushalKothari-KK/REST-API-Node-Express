import express from "express";

import {
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/users.js";

const router = express.Router();

//all routes in here are starting with /users

// get route
router.get("/", getUsers);

// post request route
router.post("/", createUser);

//get route /users/2 => req.params to get id {id:2}
router.get("/:id", getUser);

//route for delete

router.delete("/:id", deleteUser);

// update something PATCH / PUT (override all)

router.patch("/:id", updateUser);

export default router;
