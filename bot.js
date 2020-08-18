const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

function getRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max)) + 1);
}

function roll(message, user, count, die) {
  message.reply(user + " is rolling " + count + "d" + die);
  var total = 0;
  var diceArr = new Array(count);

  for (var i = 0; i < count; i++) {
    diceArr[i] = getRandomInt(die);
  }

  for (var j = 0; j < diceArr.length; j++) {
    total += diceArr[j];
  }

  message.reply(user + " rolled " + diceArr.toString() + " for a total of " + total);
}

client.on("ready", () => {
  console.log("D&D Bot Has Rolled for Initiative"); //D&D bot is on
})

client.on("message", message => {
  var user = message.member.displayName;
  var prefix = config.prefix;

  switch (message.content) {
    case prefix + "d4":
    case prefix + "1d4":
      roll(message, user, 1, 4);
      break;
    case "d6":
    case "1d6":
      message.reply("Rolling D6");
      roll = getRandomInt(6);
      console.log("roll | " + roll);
  }
});

//Logs in
client.login(process.env.BOT_TOKEN);