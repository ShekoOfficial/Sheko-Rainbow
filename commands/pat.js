const Discord = require("discord.js");
const config = require('../config.json');
const neko = require("neko.js");
let nekoclient = new neko.Client()
module.exports.run = async (bot, message, args, discord) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!pUser) return message.channel.send("Mention someone to pat")
  if(pUser.user.username === message.author.username) return message.channel.send("Yourself???")
     let pat = await nekoclient.pat();
  const embed = new Discord.RichEmbed()
    .setColor(config.pink)
    .setTitle(`${message.author.username} patted ${pUser.user.username}`)
    .setImage(pat.url)
    .setFooter("Powered by neko.js")
  message.channel.send({embed})
}