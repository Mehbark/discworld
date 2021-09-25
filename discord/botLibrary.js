const WebSocket = require("ws").WebSocket;
const fs = require("fs");

function readFile(path, encoding = "utf8") {
  try {
    return fs.readFileSync(path, encoding);
  } catch (err) {
    throw err;
  }
}
function loadUsers(path = "discord/userClients.json", encoding = "utf8") {
  readFile(path, encoding);
}

function connectBot(client, url = "ws://localhost:8080") {
  client.login(readFile("privateData/.token"));

  const ws = new WebSocket(url);

  ws.onopen = function () {
    ws.send(`{"intent":"spectate"}`);
    console.log("Should be connected lol");
  };

  ws.onmessage = function (message) {
    const world = JSON.parse(message.data);
    console.log(message.data);
    //render(world, renderLocation);
  };
}

function render(world) {
  return;
}

function connectUser(username, password, path) {
}

module.exports = {
  readFile: readFile,
  loadUsers: loadUsers,
  connectBot: connectBot,
  connectUser: connectUser
};