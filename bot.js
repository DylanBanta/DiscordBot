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
  var dOutput;


  console.log("input | " + input);

  if (input.startsWith(prefix)) {
    //Splits command after prefix. (input "!1" becomes "1");
    input = input.split(prefix)[1];
    dBool = input.includes("d");
    if (dBool) { //TODO make sure to only call this when actually rolling a die
      var total = 0;
      dOutput = diceCommand(input);
      message.reply(dOutput);
    }
  }

  function diceCommand(input) {
    var dVal;
    var dCount;
    var diceArr;
    var total = 0;
    var output;
    dVal = input.substring(input.lastIndexOf("d") + 1);
    dCount = input.substring(0, input.indexOf("d"));
    if (dCount == "" || dCount == undefined || dCount == null) {
      dCount = 1;
    }
    console.log("dVal | " + dVal);
    console.log("dCount | " + dCount);

    diceArr = Dice.roll(dVal, dCount);
    console.log("diceArr | " + diceArr);

    for (var i = 0; i < diceArr.length; i++) {
      total += diceArr[i];
    }

    if (dCount == 1) {
      output = " Rolled 1d" + dVal + " and got a " + diceArr;
    }
    else {
      output = " Rolled " + dCount + "d" + dVal + " and got " + diceArr + " for a total of " + total;
    }

    return output;
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