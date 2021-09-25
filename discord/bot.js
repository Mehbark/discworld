const Discord = require("discord.js");
const lib = require("./botLibrary");
const client = new Discord.Client({ intents: ["GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

setTimeout(() => {
  lib.connectBot(client);
}, 3000);