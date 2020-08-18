const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log('D&D Bot Has Rolled for Initiative'); //D&D bot is on
})

client.on('message', message => {
  var prefix = '!';
  if (message.content === prefix + 'd20') {
    message.reply('Rolling D20');
  }
});

client.login(config.token);