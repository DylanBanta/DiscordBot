var Npc = require("./npc/npc.js");
var config = require("/app/config.json"); //Config json file
var Dice = require("tabletop-dice"); //Dice Roller from https://www.npmjs.com/package/tabletop-dice

class MessageHandler {
  MessageHandler(message) { //Handles incoming messages and executes appropriate commands
    var prefix = config.prefix; //Prefix from config.json file
    var user = message.member.displayName; //User who posted the message
    var input = message.content; //Message content
    var dOutput; //Initialize the eventual output variable

    if (input.startsWith(prefix)) { //Checks if the input begins witht he prefix, if so, seperates out prefix from the Command
      //Splits command after prefix. (input "!1" becomes "1");
      var input = input.split(prefix)[1];

      if (input == "Save") {
        //Dm.writeFile("./Test.txt", "Test Data");
        //message.reply("Saved Test Data.");
      }

      if (input == "npc") {
        console.log("New NPC");
        Npc.test();
      }

      var dBool = false;
      //Check for Dice Roll Command
      dBool = input.includes("d");
      if (dBool) { //TODO make sure to only call this when actually rolling a die
        dOutput = Dice.diceCommand(input);
        message.reply(dOutput);
      }
    }
  }
}
module.exports = new MessageHandler();