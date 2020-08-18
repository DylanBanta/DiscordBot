const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

function getRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max)) + 1);
}

function roll(count, die) {
  message.reply('Rolling ' + count + ' d' + die);
  roll = getRandomInt(4);
  console.log("roll | " + roll);
}

client.on('ready', () => {
  console.log('D&D Bot Has Rolled for Initiative'); //D&D bot is on
})

client.on('message', message => {
  var nick = message.member.displayName;
  console.log("nick | " + nick);
  switch (message.content) {
    case "!d4":
      //roll(1, 4);
      break;
    case "!d6":
      message.reply('Rolling D6');
      roll = getRandomInt(6);
      console.log("roll | " + roll);
  }
});

//Logs in
client.login(process.env.BOT_TOKEN);