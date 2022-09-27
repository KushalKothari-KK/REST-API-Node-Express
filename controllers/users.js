import { v4 as uuidv4 } from "uuid";

// users
let users = [];

export const getUsers = (req, res) => {
  // response to send to user
  res.send(users);
};

export const createUser = (req, res) => {
  // will get complete data from body
  const user = req.body;
  // for adding data into our local database users
  users.push({ ...user, id: uuidv4() });
  // response to send to user
  res.send(`User with the name ${user.firstname} added to the database`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // if (user)=> true keep else remove
  users = users.filter((user) => user.id !== id);

  res.send(`USer with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`Uesr with the id ${id} has been updated`);
};
