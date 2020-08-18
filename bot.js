const Discord = require('discord.js');
const client = new Discord.Client();
const Util = require('./util.js');

client.on('ready', () => {
  console.log('D&D Bot Has Rolled for Initiative'); //D&D bot is on
})

client.on('message', message => {
  var roll;
  if (message.content === '!d20') {
    message.reply('Rolling D20');
    roll = Util.getRandomInt(20);
    console.log("roll | " + roll);
  }
});

//Logs in
client.login(process.env.BOT_TOKEN);