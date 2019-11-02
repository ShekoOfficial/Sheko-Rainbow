const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
  let option = args.slice(0).join(' ');
  let embed = new Discord.RichEmbed()
.setAuthor(`${bot.user.username} - Welcomer`, bot.user.displayAvatarURL)
.setThumbnail(bot.user.displayAvatarURL)
.setTitle("Kategori")
.addField(`➣ Welcome`, 'On')
.addField(`➣ Welcome`, 'Off')
.addField(`➣ Welcome`, 'Set')
msg.channel.send(embed);
  
  if(option.match("on")) {
  await db.set(`WelcomeOnOff_${msg.guild.id}`, msg.guild.id)
  msg.channel.send('Welcome has been **ON**')
  }
  
  if(option.match("off")) {
  await db.delete(`WelcomeOnOff_${msg.guild.id}`)
  msg.channel.send('Welcome has been **OFF**')
  }
  
  if(option.match("set")) { 
  let channel = msg.mentions.channels.first();
  if(!channel) return msg.channel.send('Mention channel if you using commands!')
  await db.set(`Welcome_${msg.guild.id}`, false)
  await db.set(`Welcome_${msg.guild.id}`, channel.id)
  msg.channel.send(`Welcome channel success set!`)
  }
}