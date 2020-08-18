const Discord = require('discord.js');
const client = new Discord.Client();

function getRandomInt(max) {
  return (Math.floor(Math.random() * Math.floor(max)) + 1);
}

client.on('ready', () => {
  console.log('D&D Bot Has Rolled for Initiative'); //D&D bot is on
})

client.on('message', message => {
  var roll;
  switch (message.content) {
    case "!d4":
      message.reply('Rolling D4');
      roll = getRandomInt(4);
      console.log("roll | " + roll);
      break;
    case "1d6":
      message.reply('Rolling D6');
      roll = getRandomInt(6);
      console.log("roll | " + roll);
  }
});

//Logs in
client.login(process.env.BOT_TOKEN);