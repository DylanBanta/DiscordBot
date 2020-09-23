const Discord = require("discord.js"); //Discord API
var fs = require("fs"); //Node File System
var Dice = require("tabletop-dice"); //Dice Roller from https://www.npmjs.com/package/tabletop-dice
var Dm = require("./dm/modules.js"); //My Modules that are to be loaded into the bot. /dm/modules.js
var config = require("./config.json"); //Config json file, contains data not to be loaded in plaintext. Included in .gitignore


//Create Discord Client
var client = new Discord.Client();

//When the client enters ready state
client.on("ready", () => {
  console.log("D&D Bot Has Rolled for Initiative"); //Log a message to show D&D bot is on
})

//When the client detects a message
client.on("message", message => {
  var user = message.member.displayName; //User who posted the message
  var prefix = config.prefix; //checks config file for command input prefix
  var input = message.content; //Message content
  var dOutput; //Initialize the eventual output variable

  if (input.startsWith(prefix)) { //Checks if the input begins witht he prefix, if so, seperates out prefix from the Command
    //Splits command after prefix. (input "!1" becomes "1");
    var input = input.split(prefix)[1];

    if (input == "Debug") {
      Dm.debug.log("Test?");
      Dm.th.test();
    }

    if (input == "Save") {
      //Dm.writeFile("./Test.txt", "Test Data");
      //message.reply("Saved Test Data.");
    }


    var dBool = false;
    //Check for Dice Roll Command
    dBool = input.includes("d");
    if (dBool) { //TODO make sure to only call this when actually rolling a die
      dOutput = diceCommand(input);
      message.reply(dOutput);
    }
  }

});

//Logs in
client.login(process.env.BOT_TOKEN);