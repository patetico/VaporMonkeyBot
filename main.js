const Discord = require('discord.js');


const client = new Discord.Client();

client.on(
  'ready',
  () => {
    // eslint-disable-next-line no-console
    console.log(`Logged in as ${client.user.tag}!`);
  },
);

client.on(
  'message',
  (msg) => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  },
);

client.login('token');
