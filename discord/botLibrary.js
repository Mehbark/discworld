const ws = require("ws");
const fs = require("fs");

function loadUsers(path = "./userClients.json", encoding = "utf8") {
  try {
    return fs.readFileSync(path, encoding);
  } catch (err) {
    throw err;
  }
}

function connectBot(url="ws://localhost:8080") {
  const ws = new WebSocket("ws://localhost:8080");

  ws.onopen = function () {
    ws.send(`{"intent":"spectate"}`);
  };

  ws.onmessage = function (message) {
    const world = JSON.parse(message.data);
    render(world, renderLocation);
  };
}

function connectUser(username, password, path) {

}
