const Discord = require("discord.js");
const config = require('../config.json');
const neko = require("neko.js");
let nekoclient = new neko.Client()
module.exports.run = async (bot, message, args, discord) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!pUser) return message.channel.send("Mention someone to clap")
  if(pUser.user.username === message.author.username) return message.channel.send("Yourself???")
     let clap = await nekoclient.hug();
  const embed = new Discord.RichEmbed()
    .setColor(config.pink)
    .setTitle(`${message.author.username} claps! ${pUser.user.username}`)
    .setImage(clap.url)
    .setFooter("Powered by neko.js")
  message.channel.send({embed})
}