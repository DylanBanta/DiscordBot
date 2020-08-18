const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('D&D Bot Has Rolled for Initiative'); //D&D bot is on
})

client.on('message', message => {
  if (message.content === '!d20') {
    message.reply('Rolling D20');
    var roll = Math.random(0, 3);
    roll = math.floor(roll);
    console.log(roll);
  }
});

//Logs in
client.login(process.env.BOT_TOKEN);