const Discord = require("discord.js"); //Discord API
var Mods = require("./dm/modules.js"); //My Modules that are to be loaded into the bot. /dm/modules.js
var config = require("./config.json"); //Config json file


//Create Discord Client
var client = new Discord.Client();

//When the client enters ready state
client.on("ready", () => {
  console.log("D&D Bot Has Rolled for Initiative"); //Log a message to show D&D bot is on
})

//When the client detects a message
client.on("message", message => {
  Mods.util.MessageHandler(message);
});

//Logs in
client.login(process.env.BOT_TOKEN);