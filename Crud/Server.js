const http = require("http");
const fs = require("fs");

const PORT = 3000;
const FILE = "data.json";

// Helper function to read data
function readData() {
  const data = fs.readFileSync(FILE);
  return JSON.parse(data);
}

// Helper function to write data
function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {

  // Enable CORS (important for frontend connection)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // 🔹 GET - Read all data
  if (req.method === "GET" && req.url === "/users") {
    const users = readData();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }

  // 🔹 POST - Create new user
  else if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const users = readData();
      const newUser = JSON.parse(body);

      newUser.id = Date.now();
      users.push(newUser);

      writeData(users);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    });
  }

  // 🔹 PUT - Update user
  else if (req.method === "PUT" && req.url.startsWith("/users/")) {
    const id = parseInt(req.url.split("/")[2]);
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const users = readData();
      const updatedData = JSON.parse(body);

      const index = users.findIndex(user => user.id === id);

      if (index !== -1) {
        users[index] = { ...users[index], ...updatedData };
        writeData(users);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users[index]));
      } else {
        res.writeHead(404);
        res.end("User not found");
      }
    });
  }

  // 🔹 DELETE - Delete user
  else if (req.method === "DELETE" && req.url.startsWith("/users/")) {
    const id = parseInt(req.url.split("/")[2]);
    let users = readData();

    const filteredUsers = users.filter(user => user.id !== id);

    writeData(filteredUsers);

    res.writeHead(200);
    res.end("User deleted");
  }

  else {
    res.writeHead(404);
    res.end("Route not found");
  }

});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});