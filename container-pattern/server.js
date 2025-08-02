import express from "express";
const app = express();
const port = 3000;

// Add CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const users = [
  { id: 1, name: "John Doe", age: 30, email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
  { id: 4, name: "Bob Brown", age: 35, email: "bob.brown@example.com" },
  { id: 5, name: "Charlie White", age: 22, email: "charlie.white@example.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/id/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.get("/users/email/:email", (req, res) => {
  const user = users.find((u) => u.email === req.params.email);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
