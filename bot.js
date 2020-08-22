const Discord = require("discord.js");
var Dice = require("tabletop-dice");
var Dm = require("discord-module");
var config = require("./config.json");
var client = new Discord.Client();

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
    var input = input.split(prefix)[1];

    if (input == "Debug") {
      //TODO debug
    }

    if (input == "Save") {
      //Dm.writeFile("./Test.txt", "Test Data");
      //message.reply("Saved Test Data.");
    }


    //Check for Dice Roll Command
    dBool = input.includes("d");
    if (dBool) { //TODO make sure to only call this when actually rolling a die
      dOutput = diceCommand(input);
      message.reply(dOutput);
    }
  }


  //Acceptable Inputs
  //!d4 !1d4 both result in rolling 1 4 sided die
  //!2d4 results in an array containing the results of 2 d4
  //!2d999 would roll 2 dice with 999 sides
  function diceCommand(input) {
    var dVal; //number of sides on the die
    var dCount; //number of dice to roll
    var diceArr; //array of dVals for multiple rolls
    var total = 0; //total of diceArr components added together
    var output; //Output Message

    //Find Dice Value And Count
    dVal = input.substring(input.lastIndexOf("d") + 1); //Find last "d" in input, keeps value after
    dCount = input.substring(0, input.indexOf("d")); //Find letter "d" in input, keeps value before

    //If dCount isn't specified (input !d4, !d99, etc.) set to 1
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