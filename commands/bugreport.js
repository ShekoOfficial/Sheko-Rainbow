const Discord = require("discord.js");
const fs = require("fs")
const config = require("../config.json");

exports.run = async(client, msg, args) => { // Modification
  let crafty = JSON.parse(fs.readFileSync("./crafty.json", "utf8"));
  if(!crafty[msg.guild.id]){ 
     crafty[msg.guild.id] = {
       prefix: config.prefix
     }
  }
  
    let bug = args.join(" ").slice(0);
    if (!bug) return msg.channel.send({
        embed: {
            description: `Please, enter your report!\n**EXAMPLE: ${crafty[msg.guild.id].prefix}bugreport music bot lagging!**`
        }
    })
    let user = msg.author.username;
    let guild = msg.guild.name;
    let channel = client.channels.get("629981023924518920")
    let embed = new Discord.RichEmbed()
    .setTitle("Bug Report")
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Bug", bug)
    .addField("Reported By", user)
    .addField("Reported in", guild)
    .setColor("RANDOM")
    .setFooter("All rights reserved ©ChoirilOfficial Development in 2019")
    .setTimestamp()
    msg.channel.send({
        embed: {
            description: `<:white_check_mark:432418492889694210> **| Your bug has been reported in the official server. It will be reviewed so please be patient.**`
        }
    })
channel.send(embed)
}