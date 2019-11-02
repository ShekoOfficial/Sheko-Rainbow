let { RichEmbed } = require('discord.js')
const config = require("../config.json")

exports.run = async(client, message, args, queue, color) => {
  const serverQueue = client.queue.get(message.guild.id);
  if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
  if(!serverQueue) return message.channel.send('Not playing anything right now');
  if(serverQueue.voiceChannel.id !== message.member.voiceChannel.id) return message.channel.send(`You must be in **${serverQueue.voiceChannel.name}** to loop the queue`);
  serverQueue.loop = !serverQueue.loop;
  client.queue.set(message.guild.id, serverQueue);
  if(serverQueue.loop) return message.channel.send('**🔁 Repeated current queue!**');
  return message.channel.send('**🔁 Unrepeated current queue!**');
}




exports.conf = {
    aliases: ['loop'],
    cooldown: "3"
}

exports.help = {
    name: "repeat",
    description: "Repeat the queue",
    usage: "repeat"
}