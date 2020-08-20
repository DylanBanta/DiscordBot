const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
let Dice = require("tabletop-dice");

client.on("ready", () => {
  console.log("D&D Bot Has Rolled for Initiative"); //D&D bot is on
})

client.on("message", message => {
  var user = message.member.displayName;
  var prefix = config.prefix;
  var input = message.content;
  var dBool = false;


  console.log("input | " + input);

  if (input.startsWith(prefix)) {
    //Splits command after prefix. (input "!1" becomes "1");
    input = input.split(prefix)[1];
    dBool = input.includes("d");
    if (dBool) { //TODO make sure to only call this when actually rolling a die
      diceCommand(input);
    }
  }

  function diceCommand(input) {
    var dVal;
    var dCount;
    dVal = input.substring(input.lastIndexOf("d") + 1);
    dCount = input.substring(0, input.indexOf("d"));
    console.log("dVal | " + dVal);
    console.log("dCount | " + dCount);
    console.log("Dice.roll(dCount, dVal) | " + Dice.roll(dVal, dCount));
  }

  // switch (message.content) {
  //   case prefix + "d4":
  //   case prefix + "1d4":
  //     roll(message, user, 1, 4);
  //     break;
  //   case prefix + "d6":
  //   case prefix + "1d6":
  //     message.reply("Rolling D6");
  //     roll = getRandomInt(6);
  // }
});

//Logs in
client.login(process.env.BOT_TOKEN);